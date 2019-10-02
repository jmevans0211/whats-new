import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  };

  handleSearch(event) {
    event.preventDefault()
    console.log('in handleSearch***')
  }

  render() {
    return (
      <form>
        <input type="text"/>
        <button onClick={this.handleSearch}>Submit Search</button>
      </form>
    )
  }
}

export default SearchForm;