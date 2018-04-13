import React from 'react';
import theMom from '../../images/8.jpg'
import './About.css';

function About(props) {
    return (
        <div>
            <div className="theAboutWrapper">
                <div className="theAboutTitle">
                    <h1>About The Mom</h1>
                </div>
                <div className="theAbout">
                    <img className="aboutPic" src={theMom} alt="" />
                    <h1>"In 1972, a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government they survive as soldiers of fortune. If you have a problem, if no one else can help, and if you can find them....maybe you can hire The A-Team."</h1>
                    <h1>"In 1972, a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government they survive as soldiers of fortune. If you have a problem, if no one else can help, and if you can find them....maybe you can hire The A-Team."</h1>
                    <h1>"In 1972, a crack commando unit was sent to prison by a military court for a crime they didn't commit. These men promptly escaped from a maximum security stockade to the Los Angeles underground. Today, still wanted by the government they survive as soldiers of fortune. If you have a problem, if no one else can help, and if you can find them....maybe you can hire The A-Team."</h1>
                </div>
            </div>
        </div>
    )
}

export default About;
