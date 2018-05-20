import React, { Component } from 'react';
import Listing from './Listing';

export default class ListingDisplay extends Component {
    
    render() {
        let { listings, loading, listingDelete, listing } = this.props;
        return (
            loading ?
                <div className="loadingscene">
                    Loading...
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <Listing handleEdit={this.props.handleEdit} listingDelete={listingDelete} key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}
