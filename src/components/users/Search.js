import React, { Component } from 'react';

export class Search extends Component {
  state = {
    searchText: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.searchText);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="searchText"
            placeholder="search users"
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
