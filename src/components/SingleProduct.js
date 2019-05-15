import React, { Component } from 'react';
import VariantSelector from './VariantSelector';
import { Container, Row, Col } from 'react-bootstrap';


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
      <Container>
        <Row className="single-wrapper">
          <Col className='product-selections-wrapper' xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
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
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <img src={images[0].src} height="100%" width="100%" alt=""/>
          </Col>
        </Row>
      </Container>
    )
  }
};

export default SingleProduct;