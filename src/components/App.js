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
import Searchbar from './Searchbar';

class App extends Component {
  constructor() {
    super();

    this.state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    search: '',
    searchResults: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
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

  updateSearchResults() {
    const filteredItems = this.state.products.filter(
      (product) => {
        return product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    this.setState({searchResults: filteredItems})    
  }

  updateSearch(input) {
    this.setState({ search: input })
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });

  }

  render() {

  const renderProductGrid = (props) => {
    return (
      <ProductGrid
        products={this.state.products}
        searchResults={this.state.searchResults}
        search={this.state.search}
        {...props}
      />
    )
  }

  const renderSingle = (props) => {
    return (
      <Single
        client={this.props.client}
        isCartOpen={this.state.isCartOpen}
        products={this.state.products}
        addVariantToCart={this.addVariantToCart}
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
            <Searchbar
              products={this.state.products}
              updateSearch={this.updateSearch}
              updateSearchResults={this.updateSearchResults}
              search={this.state.search}
            />
            <Route exact path="/" component={Landing}/>
            <Route path="/products" render={renderProductGrid}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/offerings" component={Offerings}/>
            <Route exact path="/view/:productId" render={renderSingle}/>
            <Cart
              updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart}
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
