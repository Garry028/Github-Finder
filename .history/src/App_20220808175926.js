import React, { Component } from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  // search github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };

  // clear users from the state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  }

  // set Alert
  setAlert = (msg, type) => {
    this.setState({ alert:{ msg , type } });

    setTimeout(()=>this.setState({alert:null}),5000);
  }

  render() {

    const { users, loading } = this.state;

    return (
      <Router>
      <div className='App'>
        <Navbar title={"Github Finder"} />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/" render={this.props =>(
              
            )
            
            }/>
          </Switch>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
      </Router>
    )
  }
}
export default App;
