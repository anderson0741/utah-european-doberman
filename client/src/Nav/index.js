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

                {/* <div className="mobileWrapper">
                    <div className="info">
                        <div className="info-content">
                            <h1>Multi level <strong>CSS-only push menu</strong></h1>
                            <p>&lt;noscript&gt;No javascript required&lt;/noscript&gt;</p>
                        </div>
                        <input type="checkbox" name="menu" id="menu" className="menu-content" />
                        <div className="menuNav">
                            <label className="menu-toggle" for="menu"><span>Toggle</span></label>
                            <ul>
                                <li>
                                    <a href="#">Menu-1</a>
                                </li>
                                <li>
                                    <a href="#">Menu-2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

export default connect(mapStateToProps, { logout })(Nav); 
