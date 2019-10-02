import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchField: ''
    }
  };

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  handleSearch = (event) => {
    event.preventDefault()
    console.log('in handleSearch***', this.state.searchField)
    
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={event => this.handleChange(event)}/>
        <button onClick={this.handleSearch}>Submit Search</button>
      </form>
    )
  }
}

export default SearchForm;