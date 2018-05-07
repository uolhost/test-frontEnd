import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleChange = async (e) => {
    await this.setState({ searchTerm: e.target.value });
    this.props.filterUser(this.state.searchTerm);
  }

  handleClick = async () => {
    await this.setState({ searchTerm: '' });
    this.props.filterUser(this.state.searchTerm);
  }

  render() {
    return (
      <div className="searchBox__container">
        Buscar
        <div className="searchBox__fields">
          <input
            className="searchBox__fields--input"
            type="text"
            name="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Buscar por nome ou e-mail..."
          />
          <button
            className="searchBox__fields--button"
            onClick={this.handleClick}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  filterUser: PropTypes.func.isRequired,
};

export default SearchBox;
