import React, { Component } from 'react';
import Header from './Header/index';
import PageTitle from './PageTitle/index';
import Clients from './Clients/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PageTitle />
        <Clients />
      </div>
    );
  }
}

export default App;
