import React from 'react';
import { Link } from 'react-router-dom';

const ToolkitCustom = (props) => {
  let wishlist = (e) => {
    window.alert('The product has been shared!');
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
              {product.popular && product.popular.length > 0 ? (
                  <span className="popularClass">{product.popular}</span>
                ) : null}
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
                  to="/WebsiteToolkit"
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
