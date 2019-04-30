import React, { Component } from 'react';

class Product extends Component {
  render(){
    console.log(this.props.product.description)
    return (
      <div>
        <img src={this.props.product.images[0].src} alt="" height="100px"/>
        {this.props.product.description}
      </div>
    )
  }
};

export default Product;