import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';


class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client`);
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }
  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  render() {
    return (
      <div className='App'>
        <Navbar title={"Github Finder"} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}
export default App;
