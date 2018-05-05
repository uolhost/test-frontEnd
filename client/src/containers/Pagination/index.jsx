import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class Pagination extends Component {
  state = {};

  renderPageHandler() {
    const { currentPage, usersPerPage, filteredUsers } = this.props.userState;
    _.range(filteredUsers.length / usersPerPage).map((n) => {
      const className = currentPage === n ? 'pagination__page--active' : 'pagination__page--inactive';
      return (
        <li className={className}>{n}</li>
      );
    });

  


    // currentPage = 3; _.range(5).map(n => {
    //   const className = currentPage === n ? 'classe do atual' : 'classe normal';
    //   return `<li className=${className}>${n}</li>`
    //   });

    // return (
    //   <div className="pagination__container--">
    //     <ul className="pagination">
    //       <li className="page-item">
    //         <span aria-hidden="true">&laquo;</span>
    //       </li>
    //       <li className="page-item">1</li>
    //       <li className="page-item">
    //         <span aria-hidden="true">&raquo;</span>
    //       </li>
    //     </ul>
    //   </div>
    // );
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
