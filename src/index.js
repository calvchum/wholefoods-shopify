import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '4f952fba4f3982eb8ecd305849799d6a',
  domain: 'cbchealth.myshopify.com'
});

ReactDOM.render(
  <App client={client} />, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
