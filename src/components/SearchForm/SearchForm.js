import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  };

  render() {
    return (
      <form>
        <input type="text"/>
        <button>Submit Search</button>
      </form>
    )
  }
}

export default SearchForm;