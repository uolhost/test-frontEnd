import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { usersPerPage, filteredUsers } = this.props.userState;
    const maxPages = Math.ceil((filteredUsers.length / usersPerPage));
    if(e.target.value <= maxPages ) {
      this.props.handlePages(e.target.value);
    }
  }
  renderResultsStats() {
    const { paginatedUsers, filteredUsers } = this.props.userState;
    return (
      <div className="results__stats">
        Exibindo <span>{paginatedUsers.length}</span> de <span>{filteredUsers.length}</span> resultados
      </div>
    );
  }

  renderPageHandler() {
    const { currentPage, usersPerPage, filteredUsers } = this.props.userState;
    const maxPages = Math.ceil((filteredUsers.length / usersPerPage));
    if (filteredUsers.length > usersPerPage) {
      return (
        <ul className="pagination__pages">
          <li onClick={this.handleClick} value={1}> &laquo; </li>
          <li onClick={this.handleClick} value={currentPage - 1}> &lsaquo;</li>
          {this.renderPageNumbers()}
          <li onClick={this.handleClick} value={currentPage + 1}> &rsaquo; </li>
          <li onClick={this.handleClick} value={maxPages}> &raquo; </li>
        </ul>
      );
    }
  }

  renderPageNumbers() {
    const { currentPage, usersPerPage, filteredUsers } = this.props.userState;
    const maxPages = Math.ceil((filteredUsers.length / usersPerPage) + 1);
    return _.range(1, maxPages).map((n) => {
      const className = currentPage === n ? 'pagination__pages--active' : 'pagination__pages--inactive';
      return (<li className={className} value={n} key={n} onClick={this.handleClick}>{n}</li>);
    });
  }

  render() {
    return (
      <div className="pagination__container">
        {this.renderResultsStats()}
        {this.renderPageHandler()}
      </div>
    );
  }
}

export default Pagination;
