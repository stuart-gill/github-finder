import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <nav className="App">
        <Navbar />
        <UserItem />
      </nav>
    );
  }
}

export default App;
