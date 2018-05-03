import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import UserResults from '../../components/UserResults/index';
import SearchBox from '../SearchBox/index';

class User extends Component {
  state = {
    users: [],
    filteredUsers: [],
    currentPage: 1,
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        const users = res.data;
        users.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({ users });
        this.setState({ filteredUsers: users });
        console.log(this.state.filteredUsers)
      });
  }

  filterUserFromSearch = (searchTerm) => {
    let filteredUsers = this.state.users;
    filteredUsers = filteredUsers
      .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.contact.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({ filteredUsers });
  };

  render() {
    return (
      <div>
        <SearchBox filterUser={this.filterUserFromSearch} />
        <UserResults userInfo={this.state} />
      </div>
    );
  }
}

export default User;

