import React, { Component } from 'react';
// import axios from 'axios';
// import Dropzone from 'react-dropzone';
// import Upload from '../shared/Upload';
// import request from 'superagent';

import '../Form.css';

export default class EditForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        let { make, model, year, miles, drivetrain, transmission, color, doors, price, photo1, photo2, photo3, /*photo4,*/ description } = props;
        this.state = {
            inputs: {
                make: make || '',
                "model": model || '',
                "year": year || '',
                "miles": miles || '',
                "drivetrain": drivetrain || '',
                "transmission": transmission || '',
                "color": color || '',
                "doors": doors || '',
                "price": price || '',
                "description": description || '',
                photo1: photo1 || '',
                photo2: photo2 || '',
                photo3: photo3 || ''
                /*photo4: photo4 || ''*/
            },
            listings: [],
            uploadedFileCloudinaryUrl: "",
            loading: true
        }
        // this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleEdit(this.props._id, this.state.inputs)
        this.props.toggleEdit();
    }

    render() {
        let { gender, color, price, photo1, photo2, photo3, photo4, description } = this.state.inputs;
        let { listings } = this.state;
        console.log(listings);
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="overallWrap">
                    <br />
                    <div className="color small"><h1 className="title">About Puppies</h1></div>
                    <br />
                    <div className="listingWrap">
                        <div className="color">
                            <h3 className="input about small">About Pups</h3>
                            <div className="linkTitle">
                                <p className="input linkTitle">
                                    Link photos:</p>
                                <p className="linkedPhotos">
                                    <input className="photo1" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo1" value={photo1} id="" />
                                    <input className="photo2" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo2" value={photo2} id="" />
                                    <input className="photo3" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo3" value={photo3} id="" />
                                    <input className="photo4" placeholder="Picture Link" onChange={this.handleChange} type="text" name="photo4" value={photo4} id="" />
                                </p>
                            </div>
                            <p className="input">Gender:
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="gender" value="Male" checked={gender === "Male"} /> Male</label>
                                <label htmlFor=""><input className="input" onChange={this.handleChange} type="radio" name="gender" value="Female" checked={gender === "Female"} /> Female</label>
                            </p>
                            <p className="input">Price:
                                <input className="input vehicleInfo price" onChange={this.handleChange} name="price" type="number" value={price} placeholder="Puppies Price" />
                            </p>
                            <p className="input">Color:
                                <input className="input vehicleInfo carColor" onChange={this.handleChange} name="color" type="text" value={color} placeholder="Puppies Fur Color" />
                            </p>
                            <div className="description input">
                                <textarea name="description" className="describe" placeholder="Description" value={description} onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                            </div>
                            <br />
                            <input className="submit" type="submit" value="Submit" />
                            <button className="submit" onClick={this.props.toggleEdit}>Cancel</button>
                            <br />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
