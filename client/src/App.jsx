import React, { Component } from 'react';
import Header from './components/Header/index';
import PageTitle from './components/PageTitle/index';
import Clients from './components/Clients/index';
import SearchBox from './components/SearchBox/index';
// import UsersResults from './components/UserResults/index';
import User from './containers/User/index';
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
        <User />
        {/* <UsersResults /> */}
      </div>
    );
  }
}

export default App;
