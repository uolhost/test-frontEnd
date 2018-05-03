import axios from 'axios';
import React, { Component } from 'react';
import UserResults from '../../components/UserResults/index';

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
      });
  }

  render() {
    return (
      <UserResults userInfo={this.state} />
    );
  }
}

export default User;
