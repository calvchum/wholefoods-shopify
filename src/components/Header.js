import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Searchbar from './Searchbar';
import { Container, Row, Col } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
      <Container className="header-container">
        <Row className="header-column-spacing">
          <Col xs="3" md={{span: 3}}>
            <div className="left-navigation">
      {/* Burger menu for mobile devices only */}
              <div className="header-hamburger-menu">
                <BurgerMenu/>
              </div>
      {/* Navigation buttons for desktop devices only */}
              <Link className='link link-text' to="/about">
                <span>About</span>
              </Link>      
              <Link className='link link-text' to="/contact">
                <span>Contact</span>
              </Link>
              <Link className='link link-text' to="/offerings">
                <span>Offerings</span>
              </Link>
            </div>
          </Col>
      {/* Logo display */}
          <Col xs="6" md={{span: 6}}>
            <div className='logo'>
              <Link to="/">
                <img src={ require('../assets/wholefoods-logo.svg') } alt="Wholefoods logo"/>
              </Link>
            </div>
          </Col>
      {/* Cart icon and shop button to navigate to products */}
          <Col xs="3" md={{span: 3}}>
            <div className="right-navigation">
              <input className="header-icons" type="image" 
                src={require('../assets/cart-icon.svg') } 
                onClick={this.props.handleCartOpen} 
                alt="Cart icon"
              />
              <Link className="header-icons search-icon link" to="/">
                <img src={ require('../assets/search-icon.svg') } alt="search icon"/>
              </Link>
            </div> 
          </Col>
        </Row>
      </Container>
      </div>
    )  
  }
};




export default Header;