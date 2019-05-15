import React, { Component } from 'react';
import Product from './Product';
import { Container, Row, Col } from 'react-bootstrap';
import FilterOptions from './FilterOptions';

class ProductGrid extends Component {
  render() {
    const {search} = this.props
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

    return (
      <div>
        <Row>
          <Col xs="12" md="4" lg="3">
              <FilterOptions/>         
          </Col>
          <Col xs="12" md="8" lg="9">
            <p className="search-results-copy subheader">{search !== '' ? `Showing results for '${search}'...` : 'Showing all products...'}</p>          
            <div className="product">{search !== '' ? this.props.searchResults.map((product) => { return ( <Product client={this.props.client} key={product.id.toString()} product={product}/> )}) : allProducts}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductGrid;
