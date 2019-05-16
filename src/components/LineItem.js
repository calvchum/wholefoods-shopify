import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    console.log(this.props.line_item.quantity)
    // i added some temporary in-line styling just so the images wouldn't block out the whole cart
    const imgStyle = {
      height: '50px',
    }
    return (
      <Container>
        <Row className="cart-qty-desc-cost">
        <Col xs="2"><p className="body-text">Qty</p></Col>
        <Col xs="8"><p className="body-text">Description</p></Col>
        <Col xs="2"><p className="body-text">Price</p></Col>
        </Row>
        <Row className="cart-product-details-wrapper">
        <Col xs="2">
          <div className="qty-remove-wrapper">
              <button className="remove-button" onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
              <span>{this.props.line_item.quantity}</span>
          </div>
        </Col>
        <Col xs="8">
          <div>
            {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} style={imgStyle}/> : null}
          </div>
          <span>
            {this.props.line_item.title}
          </span>
        </Col>
        <Col xs="2">
          <div>
            <div>

            </div>
            <span>
              ${ (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
          </div>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default LineItem;
