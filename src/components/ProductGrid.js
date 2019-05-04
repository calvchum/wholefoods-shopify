import React, { Component } from 'react';
import Product from './Product'

class ProductGrid extends Component {
  render() {
    // console.log(Object.keys(this.props.products[0]))
    let product = this.props.products[0]
    if (product === undefined) {
      console.log('not found')
    } else {
      console.log(product.id)
    }

    
    // this.props.products.map((product) => {
    //   console.log(product.title)
    // })
    let products = this.props.products.map((product) => {
      return (

        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          products={this.props.products}
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
            <div className="product">  
              {products}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGrid;