import React, { Component } from 'react';

class Product extends Component {
  render(){
    console.log(this.props.product.description)
    return (
      <div>
        <img src={this.props.product.images[0].src} alt="" height="150px"/>
      </div>
    )
  }
};

export default Product;