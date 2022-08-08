import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {


  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false });
  // }
  //componentDidMount Called immediately after a component is mounted. Setting state here will trigger re-rendering.

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

  render() {

    const{}

    return (
      <div className='App'>
        <Navbar title={"Github Finder"} />
        <div className="container">

          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} />

          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}
export default App;
