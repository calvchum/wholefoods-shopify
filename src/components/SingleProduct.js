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
    //ES6 refactoring 
    const { title, images, options } = this.props.product
    // defining te variant variables
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    // the Add To Cart button is coded here 
    const addToCartButton = <button onClick={ () => console.log(variantQuantity)} >Add To Cart</button>
    // the quantity field is coded here
    const quantityField = <label> 
      Quantity
      <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
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
      <div>
        <img src={images[0].src} height="300px" alt=""/>
        <br />
        {title}
        <br />
        {quantityField}
        <br />
        {variantSelectors}
        {addToCartButton}
      </div>
    )
  }
};

export default SingleProduct;