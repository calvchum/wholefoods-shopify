import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class FilterLinks extends React.Component {
  render() {
    return (
      <div className={this.props.filterStatus} id="filter">
        <h3 className="subheader">
        Brand</h3>
        <ul>
          <li className="body-text">Pana Chocolate</li>
          <li className="body-text">Loving Earth</li>
          <li className="body-text">Full Circle</li>
        </ul>
        <h3 className="subheader">
        Category</h3>
        <ul>
          <li className="body-text">Groceries</li>
          <li className="body-text">Chocolate</li>
          <li className="body-text">Hair Products</li>
          <li className="body-text">Housewares</li>
        </ul>
      </div>
    )
  }
}

class FilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._filterToggle = this._filterToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
      isOpen: false
      });
    };
  }
  _filterToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    let filterStatus = this.state.isOpen ? 'isopen' : '';

    return (
      <div ref="root">
        <div className='filter-wrapper' onClick={ this._filterToggle }>
            <a id="filter-header" className="body-uppercase">Filter</a>
        </div>
          <FilterLinks filterStatus={ filterStatus } />
      </div>
    )
  }
};

export default FilterOptions;
