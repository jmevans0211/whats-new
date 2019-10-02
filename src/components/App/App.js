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
      topic: 'local',
      currentTopic: news.local
    }
  }

  selectTopic = (topic) => {
    this.setState({ topic: topic })
  }
  //^^^can take out 'topic:' ^^^

  filterSearch = (search) => {
    const filteredSearch = this.state.currentTopic.filter(article => {
      return article.headline === search
    })
    this.setState({ currentTopic: filteredSearch })
  }

  render() {
    return (
      <div className="app">
        <SearchForm search={this.filterSearch}/>
        <div className="selectedNews">
          <Menu selectTopic={this.selectTopic}/>
          <NewsContainer data={this.state.currentTopic}/>
        </div>
      </div>
    );
  }
}

export default App;
