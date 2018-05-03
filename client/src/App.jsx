import React, { Component } from 'react';
import Header from './Header/index';
import PageTitle from './PageTitle/index';
import Clients from './Clients/index';
import SearchBox from './SearchBox/index';
import UsersResults from './UserResults/index';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <Header />
        <PageTitle />
        <Clients />
        <SearchBox />
        <UsersResults />
      </div>
    );
  }
}

export default App;
