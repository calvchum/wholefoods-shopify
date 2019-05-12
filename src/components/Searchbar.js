import React, { Component } from 'react';

class Searchbar extends Component {
	
  handleChange(e) {
    const search = e.target.value
    this.props.updateSearch(search);
    this.props.updateSearchResults();
  }

  render() {    
		return (
      <div>
        <input
          className="search-bar"
          placeholder="Search..."
          defaultValue=''
          onKeyUp={(e) => {this.handleChange(e)}}
        >
        </input>
      </div>
		)
	}
}

export default Searchbar;