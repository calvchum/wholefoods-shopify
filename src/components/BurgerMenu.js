import React from 'react';

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'About',
        link: '/about',
      }, {
        text: 'Contact',
        link: '/contact',
      }, {
        text: 'Offerings',
        link: '/offerings',
      }]
    }
  }
  render() {
    let links = this.state.links.map((link, i) => <li key={i} ref={i + 1}><a href={link.link}>{link.text}</a></li>);

    return (
        <div className={this.props.menuStatus} id="menu">
          <ul>
            { links }
          </ul>
        </div>
    )
  }
}

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
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
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      <div ref="root">
        <div className="hambclicker" onClick={ this._menuToggle }></div>
        <div id="hambmenu" className={ menuStatus }><span></span><span></span><span></span></div>
        <div>
        <MenuLinks menuStatus={ menuStatus }/>
        </div>
      </div>
    )
  }
}

export default BurgerMenu;
