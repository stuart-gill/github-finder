import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // loads the page with first thirty github users...
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (searchText) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ loading: false, users: [], alert: null });
  };

  setAlert = (alertText, styling) => {
    this.setState({ alert: { alertText, styling } });

    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <Router>
        <div className="app">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClearButton={users.length > 0}
                      setAlert={this.setAlert}
                    />
                    <Alert alert={alert} />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
