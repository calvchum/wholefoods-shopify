import React, { Component } from 'react';
import VariantSelector from './VariantSelector'

class SingleProduct extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  } 

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render(){
    console.log(this.props.product)
    //ES6 destructuring 
    const { title, images, options } = this.props.product
    // defining te variant variables
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    // the Add To Cart button is coded here 
    const addToCartButton = <button className="body-text" onClick={ () => this.props.addVariantToCart(variant.id, variantQuantity)} >Add To Cart</button>
    // the quantity field is coded here
    const quantityField = <label> 
      <input className="body-text" min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
    </label>

    let variantSelectors = options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          handleQuantityChange={this.handleQuantityChange}
          key={option.id.toString()}
          option={option}
        />
      )
    })

    return (
      <div className="single-wrapper">
        <div className="single-leftside">
          <div>
            <h1 className="subheader">
              {title}
            </h1>
            <span className="single-price">
            {this.props.product.price || '$3.79'}
            </span>
            <h3 className="body-text single-description">
              {this.props.product.description || 'A fine fine fiiine product'}
            </h3>

            <span className="single-variant-selectors body-text">
              <span>
                {variantSelectors}
                {/*<img src={ require('../assets/down-arrow.png') } alt="down arrow" />*/}
              </span>
            </span>


            <div className="add-to-cart-wrapper">
              <span className="single-quantity body-text">
              {quantityField}
              </span>
              {addToCartButton}
            </div> 
          </div> 
        </div>
        <div className="single-rightside">
          <img src={images[0].src} height="300px" alt=""/>
        </div>
      </div>
    )
  }
};

export default SingleProduct;