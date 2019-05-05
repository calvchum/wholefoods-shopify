import React, { Component } from 'react';
import SingleProduct from './SingleProduct'


// pass down products
// findIndex with productId against this.props.products.id

class Single extends Component {
  render(){
    
    const productId = this.props.location.pathname.replace('/view/', '')
    
    let i = this.props.products.findIndex((product) => product.id === productId);
    let product = this.props.products[i];

    if (product === undefined) {
      console.log('Loading products') 
    } else {
      return (
        <div>
          <SingleProduct
            product={product}
            {...this.props}
          />
        </div>
      )
    }

  	return(
      <div>

      </div>
    )
  }
}

export default Single;