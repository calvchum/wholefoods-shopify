import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import App from './components/App';


const client = Client.buildClient({
  storefrontAccessToken: 'cee38e88108f0288d93d539b61876095',
  domain: 'second-og-wholefoods.myshopify.com'
});

ReactDOM.render(
  <App client={client} />, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

