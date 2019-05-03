import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import './styles/style.scss'

const client = Client.buildClient({
  storefrontAccessToken: 'c0c4eb77234691b728e0355ec50326f4',
  domain: 'organic-wholefoods-melbourne.myshopify.com'
});

ReactDOM.render(
  <App client={client} />, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
