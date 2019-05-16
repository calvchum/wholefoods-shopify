import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      clicked: false
    }
  }

  handleClick(e) {
    this.setState({
      clicked: !this.state.clicked
    });
    this.focus.focus();
    e.preventDefault();
  };

  handleChange(e) {
    const search = e.target.value
    this.props.updateSearch(search);
    this.props.updateSearchResults();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/products/');
  }

  render() {  
    let clickedStatus = this.state.clicked ? 'showSearch' : 'noShowSearch';

		return (
      <div className="search-wrapper">
        <div onClick={(e) => {this.handleClick(e)}} className='search-icon-wrapper'>
          <a href='#'>
            <img src={ require("../assets/search-icon.svg") } alt=""/>
          </a>
        </div>
        <div className={`search-bar ${clickedStatus}`}>
        <form action="" onSubmit={(e) => {this.handleSubmit(e)}}>
          <input
            ref={(focus) => { this.focus = focus; }}
            type="text"
            clicked={clickedStatus}
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
