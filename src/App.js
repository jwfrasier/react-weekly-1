import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.js"
import PlayList from "./components/PlayList.js"

import PlayListForm from "./components/PlayListForm.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <NavBar />
        </div>
        <div>
          <PlayListForm />
        </div>
        <div>
          <PlayList />
        </div>
        </div>
    );
  }
}

export default App;
