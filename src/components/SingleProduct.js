import React, { Component } from 'react';
import VariantSelector from './VariantSelector'

class SingleProduct extends Component {
  render(){
    const { title, images, options } = this.props.product
    let variantSelectors = options.map((option) => {
      return (
        <VariantSelector/>
      )
    })

    return (
      <div>
        <img src={images[0].src} height="300px" alt=""/>
        {title}
      </div>
    )
  }
};

export default SingleProduct;