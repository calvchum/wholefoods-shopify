import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from './Location';
import * as Constants from '../Constants/locationInfo';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

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
          <Row>
            <Col className="footer-email-locations-wrapper">
              <div className="footer-locations">
              {locations}
              </div>
            </Col>
          </Row>
      {/* Instagram cards */}
          <Row>
            <Col>
              <div className="landing-instagram">
              Instagram cards go here
              </div> 
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Landing; 