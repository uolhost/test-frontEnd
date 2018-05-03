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
    maxPages: '',
    usersPerPage: 5,
    currentPage: 1,
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        let users = res.data;
        users = _.orderBy(users, 'name', 'asc');
        this.setState({ users });
        this.filterUserFromSearch('');
      });
  }

  filterUserFromSearch = (searchTerm) => {
    const filteredUsers = this.state.users
      .filter(user => user.name.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        user.contact.toLowerCase().includes(searchTerm.toLowerCase()));
    const sliced = filteredUsers.slice(0, 5);
    this.maxUsersPerPages(sliced);
  };


  maxUsersPerPages(arr) {
    const { usersPerPage, currentPage, filteredUsers } = this.state;
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const maxUser = arr.slice(firstUserIndex, lastUserIndex);
    this.setState({ filteredUsers: maxUser });
  }

  pageNum() {
    const { usersPerPage, currentPage, users } = this.state;
    const pageNum = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNum.push(i);
    }
    this.setState({ maxPages: pageNum })
  }


  render() {
    return (
      <div>
        <SearchBox filterUser={this.filterUserFromSearch} />
        <UserResults userInfo={this.state.filteredUsers} />
        <Pagination handlePages={this.handlePagesNum} />
      </div>
    );
  }
}

export default User;

