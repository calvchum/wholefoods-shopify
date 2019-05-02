import React, { Component } from 'react';

class Product extends Component {
  render(){
    return (
      <div>
        <img src={this.props.product.images[0].src} alt="" height="217px" width="227"/>
      </div>
    )
  }
};

export default Product;