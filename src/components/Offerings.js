import React from 'react';

const Offerings = () => {
return (
    <div className="about-wrapper">
      <div className="about-left">
        <h1 className="subheader">Store Offerings</h1>
        <p className="body-text">We offer a range of store services, listed below are the core ones. Ask in store for assistance if you're not sure how to get started with any</p>
        <ul className="body-text offerings-list">
          <li className="offerings-list-item"><a href="">Peanut Butter Grinder</a></li>
          <li className="offerings-list-item"><a href="">Ground Coffee</a></li>
          <li className="offerings-list-item"><a href="">Bottled Liquid refills</a></li>
          <li className="offerings-list-item"><a href="">Bulk dispensors</a></li>
          <li className="offerings-list-item"><a href="">Herbal Leaf Dispensors</a></li>
        </ul>
      </div>
      <div className="about-right">
        <img className="about-image" src={ require('../assets/jeri-about.png') } alt="about" />
      </div>
    </div>
  )
};



export default Offerings;