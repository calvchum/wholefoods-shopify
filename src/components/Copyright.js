import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';




class Copyright extends Component {
  render() {
    return (
      <Container>
        <Row className="body-text">
          <Col xs="12" md="6"><span>Copyright Organic Wholefoods 2019</span></Col>
          <Col className="copyright-designed-by" xs="12" md="6"><span>Designed and built by <a style={{color: '#f9f9f9'}} href="/">Dark Green Design</a></span></Col>
        </Row>
      </Container>       
    )  
  }
}

export default Copyright;