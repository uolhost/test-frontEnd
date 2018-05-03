import React, { Component } from 'react';
import './index.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
    this.props.filterUser(e.target.value);
  }

  render() {
    return (
      <div className="searchBox__container">
        Buscar {this.state.searchTerm}
        <div>
          <input
            className="searchBox__input"
            type="text"
            name="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Buscar por nome ou email"
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
