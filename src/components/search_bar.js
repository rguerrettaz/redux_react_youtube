import React, { Component } from 'react';
import BaseComponent from './base_component'

class SearchBar extends BaseComponent {
  // Like Ruby's initialize
  constructor(props) {
    // Calls Component.constructor
    super(props);

    this.state = { term: '' };
    this._bind('onInputChange')
  }

  // 'this' doesn't reference instance
  onInputChange(e) {
    const term = e.target.value
    this.setState({term});
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}/>
      </div>
    )
  }
};

export default SearchBar;