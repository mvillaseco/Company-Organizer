import React, { Component } from 'react';
import logo from './logo.svg';
import ClientsManager from './jsx/ClientsManager.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Clients App</h2>
        </div>
        <ClientsManager></ClientsManager>
      </div>
    );
  }
}

export default App;
