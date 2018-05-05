import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.handlePages(event.target.id);
  }

  renderPageHandler() {
    const { filteredUsers, usersPerPage } = this.props.userState;
    if (filteredUsers.length > usersPerPage) {
      return (
        <div className="pagination__pages">
        <ul>
          <li> <span>&laquo;</span> </li>
          <li> <span>&lsaquo;</span> </li>
          {this.renderPageNumbers()}
          <li> <span>&rsaquo;</span> </li>
          <li> <span>&raquo;</span> </li>
        </ul>
        </div>
      );
    }
  }

  renderPageNumbers() {
    const { currentPage, usersPerPage, filteredUsers } = this.props.userState;
    const maxPages = Math.ceil((filteredUsers.length / usersPerPage) + 1);
    return _.range(1, maxPages).map((n) => {
      const className = currentPage === n ? 'pagination__pages--active' : 'pagination__pages--inactive';
      return (<li className={className} key={n} id={n} onClick={this.handleClick}>{n}</li>);
    });
  }


  renderResultsStats() {
    const { paginatedUsers, filteredUsers } = this.props.userState;
    return (
      <div className="results__stats">
        Exibindo <span>{paginatedUsers.length}</span> de <span>{filteredUsers.length}</span> resultados
      </div>
    );
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
