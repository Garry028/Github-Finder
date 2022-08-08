import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form  className="form">
        <input type="text" name='text' placeholder='Search User...'/>
        <input type="submit" value="Search" capture;s />
        </form>
      </div>
    )
  }
}

export default Search;