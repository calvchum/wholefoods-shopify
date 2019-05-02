import React, { Component } from 'react';
class Location extends Component {
  render() {
    const data = this.props.location
    return (
      <div className="location-wrapper">
        <div className="location-details">
          <h3>{data.location}</h3>
          <p>{data.address}</p>
        </div>
        <div className="open-times">
          <div className="day-times">
            <span>Mon - Fri</span>
            <span>{data.hoursMTF}</span>
          </div>
          <div className="day-times">
            <span>Saturday</span>
            <span>{data.hoursSat}</span>
          </div>
          <div className="day-times">
            <span>Sunday</span>
            <span>{data.hoursSun}</span>
          </div>

          <div className="phone-number">
            <span>{data.phone}</span>
          </div>
        </div>
      </div>
    );
  };
};

export default Location;