import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
    <div>
      <h1>Wholefoods landing page</h1>
      <p>Welcome to Organic Wholefoods. A Melbourne-based ethically sourced, organic and wholefood focused store.

      We stock a heap of great products, all trying to do better by our planet and we can have a wide range of different services we offer, from fresh cut peanut butter, soap refills and more. Head on over to the offerings page to get a full list.</p>  
      <Link to={'products'}>
        Products
      </Link>
    </div>
	)
};

export default Landing; 