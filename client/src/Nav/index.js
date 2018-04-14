import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../images/Dobermanlogo2.jpg';
import { connect } from "react-redux";
import { logout } from "../redux/auth";
// import Home from '../../shared/Home/index.js';


import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv" >
                <div className="navBod">
                    <img className='imgs' src={images} alt="" />
                    <h1 className='NavTitle'>Utah European Doberman</h1>
                    <div className="menuOptions">
                        <div className="navBod_nav guest">
                            <button className="dropbtn">Menu</button>
                            <div className="nav_dropdwn">
                                <a className='links' href="/">Home</a>
                                <a className='links' href="/about">About</a>
                                <a className='links' href="/cars">Dogs</a>
                                <a className='links' href="/contact">Contact Us</a>
                            </div>
                        </div>
                        {isAuthenticated ? <div className="navBod_nav user">
                            <button className="dropbtn">Username</button>
                            <div className="nav_dropdwn user">
                                <a><Link className='links' to="/upload">Upload Content</Link></a>
                                <a className='links' onClick={this.props.logout}>Logout</a>
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Nav); 
