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
        users.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
    const users = this.state.users.map((user, index) => (
      <div key={index} className="results__user">
        <div className="results__user--avatar"><img src="./img/user-img.png" alt="User Avatar" /></div>
        <div className="results__user--info">
          <div className="results__user--name">{user.name}</div>
          <div className="results__user--email">{user.contact}</div>
        </div>
        <div className="results__user--status">
          <span className={user.status.type} />
          <span>{user.status.description}</span>
        </div>
        <div className="results__user--manage">
          <div><img src="./img/manage.png" alt="Manage User" /></div>
        </div>
      </div>));

    return (
      <div className="results__container">
        {users}
      </div>
    );
  }
}

export default UsersResults;
