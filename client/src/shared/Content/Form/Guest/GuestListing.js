import React, { Component } from 'react';
import '../Listing/Listing.css';
// import Camaro from '../images/Camaro_orange.jpg';


class Popup extends React.Component {
    constructor(props) {
        super(props);
        const { photo1, photo2, photo3, photo4 } = props;
        this.state = {
            images: [photo1, photo2, photo3, photo4],
            currIndex: 0,
            // active: ""
        }
    }
    currentSlide = (n) => {
        this.setState({
            currIndex: n
        })
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="parent">
                        <div className="space">
                            <br />
                        </div>
                        <div className='list'>
                            <div className="content">
                                <div className="details">
                                    <div className="inputListing">
                                        <h1> {this.props.year} {this.props.gender} </h1>
                                        <div className="price">
                                            <h1 className="prices">${this.props.price}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <br />
                                    </div>
                                </div>
                                <div className="padding">
                                    <div className="images">
                                        <br />
                                        {/* <img className="image" src={this.props.photo1}></img>
                                        <img className="image" src={this.props.photo2}></img>
                                        <img className="image" src={this.props.photo3}></img> */}
                                        <div>
                                            {this.state.images.map((image, i) => {
                                                return <img className="dotImage" src={image} style={{ display: i !== this.state.currIndex ? "none" : "block" }} alt="" />
                                            })}
                                            <div className="dottin">
                                                {this.state.images.map((image, i) => {
                                                    return <span className="dot" onClick={() => this.currentSlide(i)} style={{ backgroundColor: i === this.state.currIndex ? "#717171" : "" }}></span>
                                                })}
                                            </div>
                                        </div>
                                        {/* <img className="image" src={photo4} alt="" ></img> */}
                                    </div>
                                    <div className="radios">
                                        <p>Gender: {this.props.gender}</p>
                                        <p>Color: {this.props.color}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                    <span class="close" onClick={this.props.closePopup}>&times;</span>
                </div>
            </div>
        );
    }
}

class GuestListing extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        let { gender, color, price, photo1, photo2, photo3, /*photo4,*/reserve, description } = this.props;
        return (
            <div className="popupSection">
                <div className="sample">
                    <br/>
                    <br/>
                    <img className="sampleImage" src={photo1} alt="" ></img>
                    <div className="sampleDetails">
                    <img className="MobileSampleImage" src={photo1} alt="" ></img>
                    <h1 className="mobileTitle">{gender}</h1>
                    <h4 className="prices">${price}</h4>
                    <div className="sampleRadio">
                        <p>Color: {color}</p>
                        <p>Gender: {gender}</p>
                    </div>
                    <button onClick={this.togglePopup.bind(this)}>Show More</button>
                    </div>
                </div>
                {/* <button onClick={this.togglePopup.bind(this)}>show  section</button> */}
                {this.state.showPopup ?
                    <Popup
                        gender={gender}
                        color={color}
                        price={price}
                        photo1={photo1}
                        photo2={photo2}
                        photo3={photo3}
                        reserve={reserve}
                        description={description}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        )
    }
}


export default GuestListing
