import React, { Component } from 'react';
import local from '../../data/local';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer />
        {/* <Menu /> */}
      </div>
    );
  }
}

export default App;
