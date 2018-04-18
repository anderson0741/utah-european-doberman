import React, { Component } from 'react';
import GuestListing from './GuestListing';
import loading from './loading.gif';
// import loading from '../../../../images/farm.jpg';

export default class GuestDisplay extends Component {
    render() {
        let { listings, loading } = this.props;
        return (
            loading ?
                <div className="loadingscene">
                    {/* {loading} */}
                    Loading...
                    {/* <img src={loading} alt="loading"/> */}
                </div>
                :
                <div>
                    {listings.map((listing, index) => {
                        return <GuestListing key={listing._id} {...listing} />
                    })}
                </div>
        )
    }
}