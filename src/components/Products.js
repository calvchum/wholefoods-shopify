import React, { Component } from 'react';
import Product from './Product'

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="product-wrapper">
        <div className="left-side filters">
        <ul>
          <li>Brand</li>
          <li>Diet</li>
          <li>Category</li>
          <li>Specials</li>
          <li>Bulk Buys</li>
        </ul>
        </div>
        <div className="right-side">
            <p>Showing results for 'Search query'</p>
          <div className="products">  
            {products}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;