import React from 'react';
import * as Constants from '../Constants/locationInfo'

const Location = () => {
  console.log(Constants.locationData[0].location)
	return (
    <div className="location-wrapper">
      <div className="location-details">
        <h3>Flemington</h3>
        <p>277 Smith Street, Fitzroy, Melbourne</p>
      </div>
      <div className="open-times">
        <div className="day-times">
          <span>Mon - Fri</span>
          <span>9am - 7pm</span>
        </div>
        <div className="day-times">
          <span>Saturday</span>
          <span>10am - 6pm</span>
        </div>
        <div className="day-times">
          <span>Sunday</span>
          <span>10am - 5pm</span>
        </div>

        <div className="phone-number">
          <span>(08) 9768 76 76</span>
        </div>
      </div>
    </div>
	)
};

export default Location;