
import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Contact from '../shared/Contact/index';
import Shop from '../shared/Shop/index';
import Content from '../shared/Content/Content';
import Nav from '../Nav';
import Footer from '../Footer/Footer';
import Login from '../shared/Login';
import SignUp from '../shared/SignUp';
import '../App/App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTop: true
        };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 260;
            (isTop !== this.state.isTop) ? this.onScroll(isTop) : null

        });
    }

    onScroll(isTop) {
        this.setState({ isTop });
    }

    render() {
        return (
            <div className="appStructure">
                <div className="appNav">
                    <Nav />
                </div>
                <br />
                <div className="switchContent">
                    {/* <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/dogs' component={Shop} />
                        <Route path='/upload' component={Content} />
                        <Route path='/image' component={Upload} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={SignUp} />
                    </Switch> */}
                    <Home/>
                    <About/>
                    <Shop/>
                    <Contact/>
                </div>
                <br />
                <div className="appFooter">
                    <Footer />
                </div>
            </div>
        )
    }
}