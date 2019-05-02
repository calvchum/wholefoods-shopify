import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
      return (
      <div className="header-wrapper">
    {/* Burger menu for mobile devices only */}
        <div className="burger-menu link">
          <Link to="/">
            <img src={ require('../assets/burger-menu.svg') } alt="Burger menu"/>
          </Link>
  {/* Navigation buttons for desktop devices only */}
        </div>
        <div className="left-navigation">
          <Link className='link' to="/about">
            <h4>About</h4>
          </Link>      
          <Link className='link' to="/contact">
            <h4>Contact</h4>
          </Link>
          <Link className='link' to="/offerings">
            <h4>Offerings</h4>
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
        <input type="image" 
          src={require('../assets/cart-icon.svg') } 
          onClick={()=> this.props.handleCartClose} 
          alt="Burger Menu"
        />
        <Link className='shop link' to="/products">
          <h4>Shop</h4>
        </Link>
      </div>
    </div>
    )  
  }
};

export default Header;