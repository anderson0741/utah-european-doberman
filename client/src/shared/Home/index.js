import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <div className="outerHomeDiv">
            <div className='homeDivBox'>
                <br />
                <div className="welcome_level">
                    <h1 className='tag'>UTAH EUROPEAN DOBERMAN</h1>
                </div>
                <div className="welcome_level_mobile">
                    <h2 className='tag'>WELCOME TO</h2>
                    <h1>UTAH EUROPEAN DOBERMAN</h1>
                </div>
                <div className="selector">
                    <a href="cars" className="shopCars cons1">
                        <h1>Dogs</h1>
                    </a>
                    <a className="aboutSelector cons1" href="/about">
                        <h1>ABOUT US</h1>
                    </a>
                    <a href="contact" className="location consTitle">
                        <h1>LOCATION</h1>
                    </a>
                    {/* <div className="otherFuture cons1">
                        <h1>future</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
