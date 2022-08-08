import React, { Component } from 'react';
import PropT

class Search extends Component {

    state = {
        text: ''
    };

    onChange= (e) =>{
      this.setState({[e.target.name]:e.target.value});
    }
    
    onSubmit= (e) =>{
      e.preventDefault();
      this.props.searchUsers(this.state.text); // sending the props up
      this.setState({text:""});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name='text' placeholder='Search User...' value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className='btn btn-dark btn-block' />
                </form>
            </div>
        )
    }
}

export default Search;