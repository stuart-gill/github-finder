import React, { Component, Profiler } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    searchText: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearButton: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchText === '') {
      this.props.setAlert('please enter search text', 'light');
    } else {
      this.props.searchUsers(this.state.searchText);
      this.setState({ searchText: '' });
    }
  };

  render() {
    const { clearUsers, showClearButton } = this.props;

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
        {showClearButton && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
