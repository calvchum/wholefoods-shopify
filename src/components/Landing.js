import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from './Location';
import * as Constants from '../Constants/locationInfo';

class Landing extends Component {
  render() {
    let locations = Constants.locationData.map((location, i) => {
      return (
        <Location
          key={i}
          location={location}
        />
      );
    });

    return (
      <div className="landing-wrapper">
      <div className="landing-bkg">
        <div className="landing-copy">
          <p className="body-text">Welcome to Organic Wholefoods. A Melbourne-based ethically sourced, organic and wholefood focused store.
          </p>
          <p className="body-text">
          We stock a heap of great products, all trying to do better by our planet and we have a wide range of different services we offer, from fresh cut peanut butter, soap refills and more. Head on over to the offerings page to get a full list.
          </p>  
          <Link to={'products'}>
            <button className="browse-button cta-button">
              Browse Products
            </button>
          </Link>
      </div>
        </div>
        <div className="landing-locations">
          <div className="landing-locations-wrapper">
            {locations}
          </div>
        </div>
        <div className="landing-instagram">
        </div>
      </div>
    )
  }
}


export default Landing; 