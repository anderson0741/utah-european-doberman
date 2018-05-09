import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../images/Dobermanlogo2.jpg';
import { connect } from "react-redux";
import { logout } from "../redux/auth";

import './Nav.css';

class Nav extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="outerNavDiv" >
                <div className="functionalDiv1">
                <div className="navTitle">
                    <h1> Utah European Doberman</h1>
                </div>
                <div className="navSet">
                    <a className='linkz' href="/">Home</a>
                    <a className='linkz' href="/about">About</a>
                    <a className='linkz' href="/dogs">Dogs</a>
                    <a className='linkz' href="https://wizardly-borg-524486.netlify.com/">Reserve Your Dog</a>
                    <a className='linkz' href="/contact">Contact Us</a>
                </div>
                </div>

                <div className="functionalDiv">
                    <nav role="navigation">
                        <div className="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>

                            <ul className="menu">
                                <a className="navLink" href="#"><li>Home</li></a>
                                <a className="navLink" href="#"><li>About</li></a>
                                <a className="navLink" href="#"><li>Info</li></a>
                                <a className="navLink" href="#"><li>Contact</li></a>
                                <a className="navLink" href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Nav); 
