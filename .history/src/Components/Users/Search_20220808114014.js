import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form  className="form">
        <input type="text" name='text' placeholder='Search User...'/>
        </form>
      </div>
    )
  }
}

export default Search;