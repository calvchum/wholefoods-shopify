import React, { Component } from 'react';
import * as qs from 'query-string';


// pass down products
// findIndex with productId against this.props.products.id

class Single extends Component {
  render(){
    const productId = this.props.location.pathname
    console.log(productId)
  	return(
      <p>Single render of Product</p>
    )
  }
}

export default Single;