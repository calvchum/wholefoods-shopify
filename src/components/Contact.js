import React from 'react';
import * as Constants from '../Constants/locationInfo';
import Location from './Location';

const Contact = () => {

  let locations = Constants.locationData.map((location, i) => {
    return (
      <div className="contact-locations">
        <div>
          <Location
            key={i}
            location={location} 
          />
        </div>
        <div className="contact-locations-image">
          <img src={ require('../assets/jeri-about.png') } alt=""/>
        </div>
      </div>
    );
  });

	return (
    <div className="contact-container">
      <div className="contact-leftside">
        <div className="">
          <h1 className="subheader">Locations</h1>
          <div className="contact-location-cards">
              {locations}
          </div>
        </div>
      </div>
    <div className="contact-rightside">
      <div className="contact-jobs-wrapper">
        <h1 className="subheader">Suppliers</h1>
        <p className="body-text">
          If you have a great product that you think would fit our product mix, we would love to hear from you.
        </p>
        <p className="body-text">Keep in mind our criteria is pretty strict and what we look for in products is ethical production, clearly traceable origins and no funny business.
        </p>
        <p className="body-text">If this is you, giving us a call is an option, but sending us an email and organising a time to meet with us is the most convenient.
        </p>
        <p className="body-text">Contact us at products@wholefoods.com.au
        </p>
      </div>
      <div className="contact-suppliers-wrapper">
        <h1 className="subheader">Jobs</h1>
        <p className="body-text">
          If you have a great product that you think would fit our product mix, we would love to hear from you.
        </p>
        <p className="body-text">Keep in mind our criteria is pretty strict and what we look for in products is ethical production, clearly traceable origins and no funny business.
        </p>
        <p className="body-text">If this is you, giving us a call is an option, but sending us an email and organising a time to meet with us is the most convenient.
        </p>
        <p className="body-text">Contact us at products@wholefoods.com.au
        </p>
      </div>
    </div>
    </div>
  )
};

export default Contact; 