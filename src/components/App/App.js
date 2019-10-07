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
      news: null,
      currentTopic: 'local'
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(news => this.setState({ news }))
    .catch(err => console.log('error!'))
  }

  selectTopic = (currentTopic) => {
    this.setState({ currentTopic })
  }

  filterSearch = (search) => {
    const filteredSearch = this.state.currentTopic.filter(article => {
      return article.headline.toLowerCase().includes(search.toLowerCase()) || article.description.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({ currentTopic: filteredSearch })
  }

  render() {
    console.log(this.state.news)
    return (
      <div className="app">
        <SearchForm search={this.filterSearch}/>
        <div className="selectedNews">
          <Menu selectTopic={this.selectTopic}/>
          {this.state.news &&
            <NewsContainer data={this.state.news[this.state.currentTopic]}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
