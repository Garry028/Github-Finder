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

  //   this.setState({ users: res.data.items, loading: false });
  // }
  //componentDidMount Called immediately after a component is mounted. Setting state here will trigger re-rendering.

  // search github users
  searchUsers = async text => {

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  };


render() {
  return (
    <div className='App'>
      <Navbar title={"Github Finder"} />
      <div className="container">
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    </div>
  )
}
}
export default App;