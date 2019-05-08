import React, { Component } from 'react';
import Product from './Product'

class ProductGrid extends Component {
  render() {
    let allProducts = this.props.products.map((product) => {
      return (
        <Product
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          {...this.props}
        />
      );
    });

    if (this.props.search !== '') {
      this.props.searchResults.map((product) => {
        console.log(product.title)
      })
    }

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
            <div className="product">   
              {allProducts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGrid;