import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import ListingDisplay from './Listing/ListingDisplay';
import UserDisplay from './Userz/UserDisplay';

import './Form.css';

const listingUrl = `/listing/`;

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                photo1: "",
                photo2: "",
                photo3: "",
                photo4: "",
                "gender": '',
                "color": '',
                "price": '',
                "description": '',
                "user": ''
            },
            listings: [],
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.listingDelete = this.listingDelete.bind(this);
        // this.listingChange = this.listingChange.bind(this);
        // this.handleImageUpload = this.handleImageUpload.bind(this);
        // this.onImageDrop = this.onImageDrop.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }

    // handleImageUpload(file) {
    //     let upload = request.post(cloudinaryUrl)
    //         .field('upload_preset', cloudinaryPreset)
    //         .field('file', file);
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err);
    //         }
    //         console.log(response)
    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinaryUrl: response.body.secure_url
    //             });
    //         }
    //     });
    // }

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

    handleSubmit(e) {
        // let { _id, updateListing } = this.props;
        let listing = this.state.inputs
        e.preventDefault();
        axios.post(listingUrl, listing)
            .then(response => {
                console.log(response.data);
                this.setState((prevState) => {
                    return {
                        listings: [response.data, ...prevState.listings],
                        loading: false
                    }
                });
            })
            .catch(err => {
                console.error(err);
            })
        this.clearInputs();
    }

    listingDelete(id) {
        let { listings } = this.state;
        axios.delete(listingUrl + id)
            .then(response => {
                this.setState({
                    listings: listings.filter((listing, index) => {
                        return listing._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    componentDidMount() {
        axios.get(listingUrl)
            .then(response => {
                this.setState({
                    listings: response.data,
                    loading: false
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleEdit(id, updateListing) {
        axios.put(listingUrl + "/" + id, updateListing)
            .then(response => {
                let newListing = response.data;
                this.setState(prevState => {
                    return {
                        listings: prevState.listings.map(listing => {
                            if (listing._id === id) {
                                return newListing;
                            } else {
                                return listing;
                            }
                        })
                    }
                })
            })
    }

    clearInputs() {
        this.setState({
            inputs: {
                "gender": '',
                "color": '',
                "price": '',
                "description": '',
                "photo1": '',
                "photo2": '',
                "photo3": '',
                "photo4": ''
            },
            uploadedFileCloudinaryUrl: ""
        })
    }

    render() {
        let { gender, color, price, description, photo1, photo2, photo3, photo4, user } = this.state.inputs;
        let { listings, loading } = this.state;
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
                            <br />
                        </div>
                    </div>
                </form>
                <ListingDisplay handleEdit={this.handleEdit} listingDelete={this.listingDelete} loading={loading} listings={listings} />
            </div>

        )
    }
}
