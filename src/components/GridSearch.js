import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    const search = e.target.value
    this.props.updateSearch(search);
    this.props.updateSearchResults();
  }

  render() {  
    return (
      <div className="search-wrapper">
        <div className={`search-bar`}>
        <form action="">
          <input
            type="text"
            placeholder='Search..'
            defaultValue=''
            onKeyUp={(e) => {this.handleChange(e)}}            
          />
        </form>
        </div>
      </div>
    )
  }
}

export default Searchbar;
