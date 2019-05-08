import React, { Component } from 'react';

class Searchbar extends Component {
	
  handleChange(e) {
    const search = e.target.value
    const filteredItems = this.props.products.filter(
      (product) => {
        return product.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
      }
    );
    this.props.updateSearch(search);
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