import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) =>{
   
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className="fab fa-github px-1" />{props.title}
                </h1>
                <ul>
                    <li>

                    </li>
                    <li>
                        
                    </li>
                </ul>
            </nav>
        ); 
}
export default Navbar;