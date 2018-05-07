import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class UsersResults extends Component {
  state = {};
  render() {
    const renderUsers = this.props.userState.map((user, index) => (
      <div key={index} className="results__user">
        <div className="results__user--avatar">
          <img src="./img/user-img.png" alt="User Avatar" />
        </div>
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
        {renderUsers}
      </div>
    );
  }
}


UsersResults.propTypes = {
  userState: PropTypes.arrayOf(PropTypes.object),
};

UsersResults.defaultProps = {
  userState: '',
};

export default UsersResults;
