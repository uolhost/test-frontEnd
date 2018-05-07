import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import UserResults from '../../components/UserResults/index';
import SearchBox from '../SearchBox/index';
import Pagination from '../Pagination';

class User extends Component {
  state = {
    users: [],
    filteredUsers: [],
    paginatedUsers: [],
    usersPerPage: 5,
    currentPage: 1,
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        const users = res.data;
        const usersSorted = _.orderBy(users, 'name', 'asc');
        this.setState({ users: usersSorted });
        this.filterUserFromSearch('');
      });
  }

  filterUserFromSearch = (searchTerm) => {
    this.setState({ currentPage: 1 });
    const filteredUsers = this.state.users
      .filter(user => user.name.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        user.contact.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({ filteredUsers });
    this.paginateUsers(filteredUsers);
  }

  handlePages = async (n) => {
    await this.setState({ currentPage: Number(n) });
    this.paginateUsers(this.state.filteredUsers);
  }

  paginateUsers = (users) => {
    const { usersPerPage, currentPage } = this.state;
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const paginatedUsers = users.slice(firstUserIndex, lastUserIndex);
    this.setState({ paginatedUsers });
  }

  render() {
    return (
      <div>
        <SearchBox filterUser={this.filterUserFromSearch} />
        <UserResults userState={this.state.paginatedUsers} />
        <Pagination
          handlePages={this.handlePages}
          userState={this.state}
        />
      </div>
    );
  }
}

export default User;

