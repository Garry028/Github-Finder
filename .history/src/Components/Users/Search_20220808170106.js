import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text:''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        
        if (this.state.text ==='') {
            this.props.setAlert("Please enter something", 'light');
        }
        else {
            e.preventDefault();
            this.props.searchUsers(this.state.text); // sending the props up
            this.setState({ text: "" });
        }
    }


    render() {

        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name='text' placeholder='Search User...' value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className='btn btn-success btn-block' />
                </form>

                {/* means when showClear is true then & only then show clear button */}

                {
                    showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>
                        Clear
                    </button>)
                }

            </div>
        )
    }
}

export default Search;