import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Searchbar extends Component {
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicked: true
    }
  }

  handleClick(e) {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log(e);
  };

  handleChange(e) {
    const search = e.target.value
    this.props.updateSearch(search);
    this.props.updateSearchResults();
  }

  render() {  
    let clickedStatus = this.state.clicked ? 'showSearch' : '';

		return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div onClick={(e) => {this.handleClick(e)}} className='search-icon-wrapper'>
        <a href='#'>
          <img src={ require("../assets/search-icon.svg") } alt=""/>
        </a>
        <input
          className="search-bar"
          placeholder='Search..'
          defaultValue=''
          onKeyUp={(e) => {this.handleChange(e)}}
        />
      </div>
      </ReactCSSTransitionGroup>

		)
	}
}

export default Searchbar;