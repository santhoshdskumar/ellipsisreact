import React from 'react';
import { Link } from 'react-router-dom';

const ToolkitCustom = (props) => {
  let wishlist = (e) => {
    window.alert('The product has been shared!');
  };
  let next = (e) => {
    window.alert('Next product');
  };
  return (
    <div className={props.className}>
      {props.toolkit.map((product, index) => {
        return (
          <div key={index} className="item-list">
            <div className="dashboardProduct">
              <h2>
                <a title={product.title} href="/">
                  <img src={product.socialtype} alt={product.title} />
                </a>
              </h2>
              <h3>{product.title}</h3>
              <span className="popularClass">{product.popular}</span>
              <p>{product.text} </p>
              <div className="d-flex justify-content-between">
                <Link
                  className="btn btn-wishlist align-self-center"
                  href="javascript:void(0)"
                  onClick={(e) => {
                    wishlist(e);
                  }}
                >
                  <i className="fas fa-heart"></i>
                </Link>
                <Link
                  className="btn btn-next  align-self-center"
                  to="/ProjectEdit"
                >
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToolkitCustom;
