import React from 'react';
import theMom from '../../images/8.jpg'
import './About.css';

function About(props) {
    return (
        <div className="wrapCenter">
            <div className="theAboutWrapper">
                <div className="theAboutTitle">
                    <h1>History</h1>
                </div>
                <div className="theAbout">
                    <img className="aboutPic" src={theMom} alt="" />
                    <h1>The Doberman is a large, fearless dog that is well-known for its historically common job as a guard dog. Originating in Germany, the Doberman Pinscher is highly intelligent and loyal, and is well suited for police work, tracking, and competitive obedience. </h1>
                    <h1>At home, these dogs are sweet, affectionate, and thrive on human companionship. Dobermans are usually excellent with children and other pets, and are consistently ranked among the AKC's most popular dog breeds.</h1>
                </div>
            </div>
        </div>
    )
}

export default About;
