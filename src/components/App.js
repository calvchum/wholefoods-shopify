import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Offerings from './Offerings';
import Products from './Products';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Location from './Location';

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

  render() {

  const renderProducts = (props) => {
    return (
      <Products
        products={this.state.products}
        data={
          {
          name: 'calvin',
          dob: '04/07/1991'
          }
        }
        {...props}
      />
    )
  }
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/offerings" component={Offerings}/>
            <Route exact path="/products" render={renderProducts}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
