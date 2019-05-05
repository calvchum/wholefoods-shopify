import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Offerings from './Offerings';
import ProductGrid from './ProductGrid';
import Contact from './Contact';
import Header from './Header';
import Single from './Single';
import Footer from './Footer';
import Cart from './Cart';
import About from './About';

class App extends Component {
  constructor() {
    super();

    this.state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    location: ['Fitzroy', 'Flemington', 'Brunswick']
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }

  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  addProductToCart() {
    this.setState({
      idCartOpen: true,
    });
    console.log(this.props.client.checkout)
  }

  render() {

  const renderProductGrid = (props) => {
    return (
      <ProductGrid
        products={this.state.products}
        addProductToCart={this.addProductToCart}
        {...props}
      />
    )
  }

  const renderSingle = (props) => {
    return (
      <Single
        products={this.state.products}
        {...props}
      />
    )
  }
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header
              handleCartOpen={this.handleCartOpen}
            />
            <Route exact path="/" component={Landing}/>
            <Route path="/products" render={renderProductGrid}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/offerings" component={Offerings}/>
            <Route exact path="/view/:productId" render={renderSingle}/>
            <Cart
              checkout={this.state.checkout}
              isCartOpen={this.state.isCartOpen}
              handleCartClose={this.handleCartClose}              
            />
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
