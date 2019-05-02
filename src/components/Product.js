import React, { Component } from 'react';

class Product extends Component {
  render(){

    return (
      <div>

        <img src={this.props.product.images[0].src} alt=""/>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    )
  }
};

export default Product;