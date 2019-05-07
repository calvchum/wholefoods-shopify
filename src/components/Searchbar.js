import React, { Component } from 'react';

class Searchbar extends Component {
	
  handleChange(e) {
    const search = e.target.value
    this.props.updateSearch(search);
  }

  render() {    
		return (
      <div>
        <input
          placeholder="Search..."
          defaultValue=''
          onChange={(e) => {this.handleChange(e)}}
        >
        </input>
      </div>
		)
	}
}

export default Searchbar;