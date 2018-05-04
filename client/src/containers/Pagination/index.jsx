import React, { Component } from 'react';
import './index.css';

class Pagination extends Component {
  state = {};


  renderPageHandler() {
    this.props;
    return (
      <div className="pagination__container--">
        <ul className="pagination">
          <li className="page-item">
            <span aria-hidden="true">&laquo;</span>
          </li>
          <li className="page-item">1</li>
          <li className="page-item">
            <span aria-hidden="true">&raquo;</span>
          </li>
        </ul>
      </div>
    );
  }

  renderResultsStats() {
    const { maxUsers, filteredUsers } = this.props.userState;
    return (
      <div className="results__stats">
        Exibindo <span>{maxUsers.length}</span> de <span>{filteredUsers.length}</span> resultados
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
