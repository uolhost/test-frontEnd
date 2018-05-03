import React, { Component } from 'react';
import './index.css';

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <div className="searchBox__container">
        Buscar
        <div className="searchBox__input">
          Buscar por nome ou email
        </div>
      </div>
    );
  }
}

export default SearchBox;
