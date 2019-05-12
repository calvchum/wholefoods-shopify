import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

class Header extends Component {
  render() {
      return (
      <div className="header-wrapper">
  {/* Navigation buttons for desktop devices only */}
        <div className="left-navigation">
    {/* Burger menu for mobile devices only */}
          <div className="header-hamburger-menu">
            <BurgerMenu/>
          </div>
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
  {/* Logo display */}
        <div className='logo'>
          <Link to="/">
            <img src={ require('../assets/wholefoods-logo.svg') } alt="Wholefoods logo"/>
          </Link>
        </div>
   {/* Cart icon and shop button to navigate to products */}
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
    </div>
    )  
  }
};



export default Header;