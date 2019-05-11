import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


class Location extends Component {
  render() {
    const data = this.props.location
    return (
      <Container>
        <Row>
          <h3>{data.location}</h3>
        </Row>
        <Row>
          <p>{data.address}</p>
        </Row>
        <Row className="locations-opening-hours">
          <Col className="locations-opening-hours" xs="6"><span>Mon - Fri</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursMTF}</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>Saturday</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursSat}</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>Sunday</span></Col>
          <Col className="locations-opening-hours" xs="6"><span>{data.hoursSun}</span></Col>
        </Row>
        <Row>
          <Col xs="12"><span>{data.phone}</span></Col>
        </Row>
      </Container>
    );
  };
};

export default Location;