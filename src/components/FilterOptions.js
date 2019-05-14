import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class FilterLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLinks: [{
        category: 'Brand',
        subCategories: 'Pana Chocolate',
      }, {
        category: 'Diet',
        subCategories: 'Keto',
      }]
    }
  }
  render() {
    let filterLinks = this.state.filterLinks.map((link, i) => <li key={i} ref={i + 1}><a href='#'>{link.category}</a></li>);

    return (
        <div className={this.props.filterStatus} id="filter">
          <ul>
            { filterLinks }
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
        <div onClick={ this._filterToggle }>
            <a className="body-uppercase">Filter</a>
        </div>
          <FilterLinks filterStatus={ filterStatus } />
      </div>
    )
  }
};

export default FilterOptions;