import React, { Component } from 'react';
import Product from './Product';


// pass down products
// findIndex with productId against this.props.products.id

class Single extends Component {
  render(){
    const productId = this.props.location.pathname.replace('/view/', '')
    const i = this.props.products.findIndex((product) => product.id === productId);
    const product = this.props.products[i];
    
  	return(
      <div>
        <p>Single page of</p>
      </div>
    )
  }
}

export default Single;