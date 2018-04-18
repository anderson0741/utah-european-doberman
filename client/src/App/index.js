import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Contact from '../shared/Contact/index';
import Shop from '../shared/Shop/index';
import Content from '../shared/Content/Content';
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import Login from '../shared/Login';
import SignUp from '../shared/SignUp';
// import Menu from '../Nav/Menu';
// import MenuItem from '../Nav/MenuItem';
import './App.css';


class App extends Component {
    // constructor(props) {
    //     this.showLeft = this.showLeft.bind(this);
    //     this.showRight = this.showRight.bind(this);
    // }
    showLeft() {
        this.refs.left.show();
    }

    showRight() {
        this.refs.right.show();
    }

    render() {
        return (
            <div className="appStructure">
                <div className="appNav">
                    <Nav />
                    {/* <button onClick={this.showLeft}>Show Left Menu!</button>
                    <button onClick={this.showRight}>Show Right Menu!</button>
                    <Menu ref="left" alignment="left">
                        <MenuItem hash="first-page">First Page</MenuItem>
                        <MenuItem hash="second-page">Second Page</MenuItem>
                        <MenuItem hash="third-page">Third Page</MenuItem>
                    </Menu>

                    <Menu ref="right" alignment="right">
                        <MenuItem hash="first-page">First Page</MenuItem>
                        <MenuItem hash="second-page">Second Page</MenuItem>
                        <MenuItem hash="third-page">Third Page</MenuItem>
                    </Menu> */}
                </div>
            {/* </div> */}
            {/* <br /> */}
            <div className="switchContent">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/dogs' component={Shop} />
                    <Route path='/upload' component={Content} />
                    {/* <Route path='/image' component={Upload} /> */}
                    <Route path='/contact' component={Contact} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
            <br />
            <div className="appFooter">
                <Footer />
            </div>
            </div>
    )
    }
}

export default App;

