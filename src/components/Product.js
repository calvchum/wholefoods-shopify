import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render(){
    const { id } = this.props.product
    return (
      <div className="product-display-image">
	      <Link to={`/view/${id}`}>
	        <img src={this.props.product.images[0].src} alt=""/>
	      </Link>
        <button onClick={ () => console.log(this.props.product.variants)} className="add-to-cart">Add To Cart</button>
      </div>
    )
  }
};

export default Product;