import React, { Component } from 'react'

class Search extends Component {

    state={
        text : ''
    }
  render() {
    return (
      <div>
        <form  className="form">
        <input type="text" name='text' placeholder='Search User...' value={this.state.text} onChange={}/>
        <input type="submit" value="Search" className='btn btn-dark btn-block' />
        </form>
      </div>
    )
  }
}

export default Search;