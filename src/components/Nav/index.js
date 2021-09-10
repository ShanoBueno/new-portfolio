import React from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "../About"
import Contact from "../Contact"
import Home from "../Home"



function Nav() {

  return (
    <header>
      <Router>

     
       
    

        
            <ul>
              <li>
                <Link to="/home">
              <BiHomeAlt />
                </Link>


              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            
            </ul>

            <hr />

        
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
          
      
     


    </Router >
        </header >

  );
}

export default Nav;