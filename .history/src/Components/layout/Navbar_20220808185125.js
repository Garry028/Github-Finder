import React from "react";
import {Lin}

const Navbar = (props) =>{
   
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className="fab fa-github px-1" />{props.title}
                </h1>
            </nav>
        ); 
}
export default Navbar;