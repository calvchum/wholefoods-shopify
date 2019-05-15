import React from 'react';
import * as Constants from '../Constants/offeringsInfo';

class Offerings extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      displayImage: ''
    }
  }

  handleMouseHover(offering) {
    this.setState({
      displayImage: offering.src
    })
  }

  render() {
    const {displayImage} = this.state
    const defaultImage = Constants.offeringsData[0].src
    let offerings = Constants.offeringsData.map((offering, i) => {
      return (
        <li onMouseEnter={ () => this.handleMouseHover(offering)} className="offerings-list-item" key={i}>{offering.name}</li>
        );
    })

  return (
      <div className="about-wrapper">
        <div className="about-left">
          <h1 className="subheader">Store Offerings</h1>
          <p className="body-text">We offer a range of store services, listed below are the core ones. Ask in store for assistance if you're not sure how to get started with any</p>
          <ul  className="body-text offerings-list">
            {offerings}
          </ul>
        </div>
        <div className="about-right">
          <img className="about-image" src={(displayImage === '' ? defaultImage : displayImage)} style={{height: '500px'}} alt="about" />
        </div>
      </div>
    )
  };
}


export default Offerings;