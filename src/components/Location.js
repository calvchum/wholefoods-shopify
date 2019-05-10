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
        <Row>
            <Col xs="6"><span>Mon - Fri</span></Col>
            <Col xs="6"><span>{data.hoursMTF}</span></Col>

            <Col xs="6"><span>Saturday</span></Col>
            <Col xs="6"><span>{data.hoursSat}</span></Col>


            <Col xs="6"><span>Sunday</span></Col>
            <Col xs="6"><span>{data.hoursSun}</span></Col>
          <span>{data.phone}</span>
        </Row>
      </Container>
    );
  };
};

export default Location;