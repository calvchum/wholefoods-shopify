import React from 'react';
import * as Constants from '../Constants/locationInfo';
import Location from './Location';

const Contact = () => {

  let locations = Constants.locationData.map((location, i) => {
    return (
      <Location
        key={i}
        location={location} 
      />
    );
  });

	return (
    <div>
      <h1>Contact page</h1>
      <div className="contact-cards">
        {locations}
      </div>
    </div>
	)
};

export default Contact; 