import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class UsersResults extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    const users = this.state.users.map((user, index) =>(
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.contact}</td>
        <td>{user.status.type}</td>
        <td>{user.status.description}</td>
      </tr>));

    return (
      <table>
        <tbody>
          {users}
        </tbody>
      </table>
    );
  }
}

export default UsersResults;
