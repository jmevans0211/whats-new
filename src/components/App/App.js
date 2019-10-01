import React, { Component } from 'react';
import data from '../../data/local';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

console.log(data)
class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: data.local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <div className="selectedNews">
          <Menu />
          <NewsContainer />
        </div>
      </div>
    );
  }
}

export default App;
