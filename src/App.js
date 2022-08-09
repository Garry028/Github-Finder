import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/Pages/About';
import User from './Components/Users/User';


const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // search github users
  const searchUsers = async text => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  };


  // clear users from the state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // set Alert
  const setalert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 5000);
  }

  return (
    <Router>
      <div className='App'>
        <Navbar title={"Github Finder"} />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route
              exact path="/"
              element={
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setalert}
                  />
                  <Users loading={loading} users={users} />
                </>
              }
            />
            <Route exact path='/about' element={<About />} /> 

           {/* :login is the parameter this will change dynamically */}
            <Route exact path='/user/:login'
              element={
                <>
                  <User loading={loading} />
                </>
              } />
          </Routes>
          {/* in the new version of  router switch is replaced by the Routes */}
        </div>
      </div>
    </Router>
  )

}
export default App;
