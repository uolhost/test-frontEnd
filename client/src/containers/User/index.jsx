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
    maxUsers: [],
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
    this.setState({filteredUsers})
    this.maxUsersPerPages(filteredUsers);
  };


  maxUsersPerPages(filteredUsers) {
    const { usersPerPage, currentPage } = this.state;
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const maxUsers = filteredUsers.slice(firstUserIndex, lastUserIndex);
    this.setState({ maxUsers });
  }

  // pageNum() {
  //   const { usersPerPage, currentPage, users } = this.state;
  //   const pageNum = [];
  //   for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
  //     pageNum.push(i);
  //   }
  //   this.setState({ maxPages: pageNum });
  // }


  render() {
    return (
      <div>
        <SearchBox filterUser={this.filterUserFromSearch} />
        <UserResults userInfo={this.state.maxUsers} />
        <Pagination
          handlePages={this.handlePagesNum}
          userState={this.state}
        />
      </div>
    );
  }
}

export default User;

