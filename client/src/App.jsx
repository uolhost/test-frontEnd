import React, { Component } from 'react';
import Header from './components/Header/index';
import PageTitle from './components/PageTitle/index';
import Clients from './components/Clients/index';
import User from './containers/User/index';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <Header />
        <PageTitle />
        <Clients />
        <User />
      </div>
    );
  }
}

export default App;
