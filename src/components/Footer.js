import React, { Component } from 'react';
import Location from './Location';
import * as Constants from '../Constants/locationInfo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
          <div className="landing-locations-wrapper">
            {locations}
          </div>
          <Form >
            <Form.Group className="email-signup" controlId="formBasicEmail">
              <Form.Label className="body-text">Email address</Form.Label>
              <div className="email-submit-wrapper">
                <Form.Control className="email-input" type="email" placeholder="Enter email" />
                <Button className="email-submit-button" type="submit">
                  Submit
                </Button>
                
              </div>
              <Form.Text className="body-text text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </div>
        <div className="copyright">
        <div className="copyright-text">
          <span>Copyright Organic Wholefoods 2019</span>
        </div>
        <div className="designed-by">
          <span>Designed and built by <a style={{color: '#f9f9f9'}} href="/">Caterpillar Collective</a></span>
        </div>
        </div>
      </div>
    )  
  }
}

export default Footer;