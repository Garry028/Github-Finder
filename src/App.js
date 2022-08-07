import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';


class App extends Component {

  static defaultProps = {
    title: "Github Finder"
  };

  render() {
    return (
      <div className='App'>
        <Navbar title={"Github Finder"} />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  }
}
export default App;
