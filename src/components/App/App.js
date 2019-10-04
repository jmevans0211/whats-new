import React, { Component } from 'react';
import news from '../../data/news';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: news.local
    }
  }

  selectTopic = (topic) => {
    this.setState({ currentTopic: news[topic] })
  }
  //^^^can take out 'topic:' ^^^

  filterSearch = (search) => {
    const filteredSearch = this.state.currentTopic.filter(article => {
      return article.headline.includes(search) || article.description.includes(search)
    })
    this.setState({ currentTopic: filteredSearch })

    // upper/lowercase everything
    //also include description
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
