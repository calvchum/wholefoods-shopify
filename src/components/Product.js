import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render(){
    const { id } = this.props.product
    return (
      <div className="product-display-image">
	      <Link to={`/view/${id}`}>
	        <img src={this.props.product.images[0].src} alt=""/>
	        <button className="add-to-cart">Add To Cart</button>
	      </Link>
      </div>
    )
  }
};

export default Product;