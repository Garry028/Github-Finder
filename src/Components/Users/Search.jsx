import React,{useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers ,setAlert}) => {

const[text,setText]=useState(''); // '' is the initial value of the text
    

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {

        e.preventDefault();
        if (text === '') {
            setAlert("Please enter something", 'light');
        }
        else {
            searchUsers(text); 
            setText("");
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name='text' placeholder='Search User...' value={text} onChange={onChange} />
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

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search;