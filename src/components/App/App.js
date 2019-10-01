import React, { Component } from 'react';
// import { entertainment, health, local, science, technology } from '../../data';
import news from '../../data/news';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: news,
      topic: 'local'
    }
  }

  selectTopic = (topic) => {
    this.setState({topic: topic})
  }
  //^^^can take out 'topic:' ^^^

  render() {
    console.log(this.state.data)
    return (
      <div className="app">
        <SearchForm />
        <div className="selectedNews">
          <Menu selectTopic={this.selectTopic}/>
          <NewsContainer data={this.state.data[this.state.topic]}/>
        </div>
      </div>
    );
  }
}

export default App;
