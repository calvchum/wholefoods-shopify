import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


class Location extends Component {
  render() {
    const data = this.props.location
    return (
      <Container xs="12" md="6" lg="4">
    {/* Location header and address */}
        <Row>
          <Col className="body-text">
            <h3>{data.location}</h3>
          </Col>
        </Row>
        <Row>
          <Col className="body-text">
            <p>{data.address}</p>
          </Col>
        </Row>
    {/* Opening days and times */}
        <Row className="body-text locations-opening-hours-wrapper">
          <Col className="locations-opening-hours" xs="6"><span>Mon - Fri</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursMTF}</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>Saturday</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursSat}</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>Sunday</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursSun}</span></Col>
        </Row>
    {/* Inline style for padding-top of PH number*/}
        <Row>
          <Col xs="12" className="location-phone-number"><span>{data.phone}</span></Col>
        </Row>
      </Container>
    );
  };
};

export default Location;