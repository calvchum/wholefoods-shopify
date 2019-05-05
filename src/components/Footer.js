import React, { Component } from 'react';
import Location from './Location';
import * as Constants from '../Constants/locationInfo'

class Footer extends Component {
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
      <div className="footer">
        <div className="footer-wrapper">
          <div className="location-cards" >
            {locations}
          </div>
          <div className="email-list">
            <p>Join our mailing list to receive a once a month new products update</p>
            <div className="email-input">
              <input className="first-name" type="text" placeholder="First Name"/>
              <input className="email" type="text" placeholder="Email"/>
            </div>
          </div>
        </div>
          <div className="copyright">
            <span>Copyright Organic Wholefoods 2019</span>
            <span>Designed and built by <a style={{color: '#f9f9f9'}} href="/">Caterpillar Collective</a></span>
          </div>
      </div>
    )  
  }
}

export default Footer;