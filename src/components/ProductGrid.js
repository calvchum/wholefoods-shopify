import React, { Component } from 'react';
import Product from './Product';
import GridSearch from './GridSearch';
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
          <Col className=" product-gird-wrapper" xs="12" md="8" lg="9">
              <GridSearch
                {...this.props}
                products={this.props.products}
                updateSearch={this.props.updateSearch}
                updateSearchResults={this.props.updateSearchResults}
                submitSearch={this.props.submitSearch}
                search={this.props.search}
              />
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
