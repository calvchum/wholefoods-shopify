import React, { Component } from 'react';
import Location from './Location';
import * as Constants from '../Constants/locationInfo';
import EmailSignup from './EmailSignup';
import Copyright from './Copyright';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';




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
      <div className="footer-container">
        <Container>
    {/* Displaying the location cards */}
          <Row>
            <Col className="footer-email-locations-wrapper" xs={{ span: 12, order: 12 }}  lg={{ span: 8, order: 1 }}>
              <div className="footer-locations">
              {locations}
              </div>
            </Col>
    {/* Email signup form */}
            <Col className="footer-email-locations-wrapper" xs={{ span: 12, order: 1 }}  lg={{ span: 4, order: 12 }}>
              <EmailSignup/>
            </Col>
          </Row>
    {/* Copyright and designed by copy */}
          <Row xs="12" className="footer-copyright">
            <Copyright/>
          </Row>
        </Container>
      </div>
    )  
  }
}

export default Footer;