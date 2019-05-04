import React, { Component } from 'react';

class SingleProduct extends Component {
  render(){
    const { id, title, images } = this.props.product
    return (
      <div>
        <img src={images[0].src} height="300px" alt=""/>
        {title}
      </div>
    )
  }
};

export default SingleProduct;