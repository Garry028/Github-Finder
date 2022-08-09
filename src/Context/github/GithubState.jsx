import React, { useReducer } from "react";
import axios from "axios";

import GithubReducer from './githubReducer';
import GithubContext from "./githubContext";

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer( initialState);


    // search users


    // get user


    // clear users


    // setloading


    return <GithubContext.Provider
        // we're making this props available globally thoughout the project
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading
        }}

    >

        {props.children}

    </GithubContext.Provider>

}

export default GithubState