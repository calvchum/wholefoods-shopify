import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from './Location';
import * as Constants from '../Constants/locationInfo';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class Landing extends Component {
  render() {
    let locations = Constants.locationData.map((location, i) => {
      return (
        <div className="landing-location-bkg">
          <div className="location-opacity">
            <Location
              key={i}
              location={location}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* Intro text & CTA */}
        <Row className="landing-bkg">
          <Col className="landing-copy" xs="12" md="8" lg="6">
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
          </Col>
        </Row>    
        <Container>
      {/* Locations cards */}
          <Row>
            <Col className='landing-locations-wrapper'>
              {locations}
            </Col>
          </Row>
      {/* Instagram cards go here
          <Row>
            <Col>
              <div className="landing-instagram">
              Instagram cards go here
              </div> 
            </Col>
          </Row>*/}
        </Container>
      </div>
    )
  }
}


export default Landing; 