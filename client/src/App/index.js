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
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="appStructure">
                <div className="appNav">
                    <Nav />
                </div>
                <br />
                <div className="switchContent">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/history' component={About} />
                        <Route exact path='/dogs' component={Shop} />
                        <Route path='/upload' component={Content} />
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

