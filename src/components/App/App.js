import React, { Component } from 'react';
import news from '../../data/news';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';
import './App.css';
// const news = fetch('https://whats-new-api.herokuapp.com/api/v1/news')
// .then(data => data.json())
// .then(data => console.log(data))
// .catch(err => console.log('error!'))

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

  filterSearch = (search) => {
    const filteredSearch = this.state.currentTopic.filter(article => {
      return article.headline.toLowerCase().includes(search.toLowerCase()) || article.description.toLowerCase().includes(search.toLowerCase())
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
