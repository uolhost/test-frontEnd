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

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        const users = res.data;
        const usersSorted = _.orderBy(users, 'name', 'asc');
        this.setState({ users: usersSorted });
        this.filterUserFromSearch('');
      });
  }

  filterUserFromSearch = (searchTerm) => {
    const filteredUsers = this.state.users
      .filter(user => user.name.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        user.contact.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({ filteredUsers });
    this.paginatedUsers(filteredUsers);
  };


  paginatedUsers(filteredUsers) {
    const { usersPerPage, currentPage } = this.state;
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const paginatedUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);
    this.setState({ paginatedUsers });
  }

  handlePages() {
    
  }

  render() {
    return (
      <div>
        <SearchBox filterUser={this.filterUserFromSearch} />
        <UserResults userInfo={this.state.paginatedUsers} />
        <Pagination
          handlePages={this.handlePages}
          userState={this.state}
        />
      </div>
    );
  }
}

export default User;

