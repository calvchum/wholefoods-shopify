import React, {Component} from 'react';

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
      <li>
        <div>
          {this.props.line_item.variant.image ? <img src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} style={imgStyle}/> : null}
        </div>
        <div>
          <div>
            <div>
              {this.props.line_item.variant.title}
            </div>
            <span>
              {this.props.line_item.title}
            </span>
          </div>
          <div>
            <div>
              <button onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
              <span>{this.props.line_item.quantity}</span>
              <button onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
            </div>
            <span>
              $ { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
            </span>
            <button onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
