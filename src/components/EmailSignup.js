import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

class EmailSignup extends Component {
  render() {
    return (
      <Container className="email-signup-wrapper">
        <Form >
        <Form.Group className="" controlId="formBasicEmail">
          <Row>
            <Col>
              <Form.Label className="body-text">Join our tribe to recieve updates on the latest brands we're stocking.</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <div className="email-submit-wrapper">
                 <Form.Control className="email-input" type="email" placeholder="Enter email" />
                <Button className="email-submit-button" type="submit">
                  <img src={ require('../assets/paper-plane-navy.svg') } alt="paperplane" width="30px" />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Text className="body-text text-muted">We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Row>
          </Form.Group>
        </Form>
      </Container>
    )  
  }
}

export default EmailSignup;