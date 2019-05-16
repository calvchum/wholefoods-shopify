import React from 'react';
import * as Constants from '../Constants/offeringsInfo';
import { Container, Row, Col } from 'react-bootstrap';


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
    const { displayImage } = this.state
    const defaultImage = Constants.offeringsData[0].src
    let offerings = Constants.offeringsData.map((offering, i) => {
      return (
        <li onMouseEnter={ () => this.handleMouseHover(offering)} className="offerings-list-item" key={i}>{offering.name}</li>
        );
    })

  return (
    <Container className="offerings-wrapper">
      <Row>
        <Col xs={{ span: 12, order: 1 }} md='6'>
          <h1 className="subheader">Store Offerings</h1>
          <p className="body-text">We offer a range of store services, listed below are the core ones. Ask in store for assistance if you're not sure how to get started with any</p>
          <ul  className="body-text offerings-list">
            {offerings}
          </ul> 
        </Col>
        <Col className="offerings-image-wrapper" xs={{ span: 12, order: 1 }} md='6'>
            <img className="offerings-image"  src={(displayImage === '' ? defaultImage : displayImage)} alt="about" />
        </Col>
      </Row>
    </Container>
    )
  }
}

export default Offerings;