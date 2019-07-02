import React from 'react';
import { Link } from "react-router-dom";
import css from "./navbar.css";



export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="navbar">
                <div className="nav-icon">
                    <Link to="/" className="home">
                    <img src="YuGluLogo.PNG" className="YuGluMast" />
                      </Link>                 
                <div>
                    <ul className="Nav_item_wrapper">
                      <li>
                        <Link className="Nav__link" to="/signup">Sign Up</Link>
                      </li>
                      <li>
                        <Link className="Nav__link" to="/dashboard">DashBoard</Link>
                      </li>
                      <li>
                        <Link className="Nav__link" to="/addnew">Add a Post</Link>
                      </li>
                      <li>
                        <Link className="Nav__link" to="/login">Login</Link>
                      </li>
                    </ul>
                </div>    
                </div>   
            </div>
        )
    }
}