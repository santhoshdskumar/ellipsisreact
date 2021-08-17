import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
  margin: 15,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    750: {
      items: 3,
    },
    1100: {
      items: 4,
    },
    1400: {
      items: 5,
    },
  },
};

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const productData = this.props.toolkit;
    let wishlist = (e) => {
      window.alert('The product has been shared!');
    };
    let next = (e) => {
      window.alert('Next product');
    };
    return (
      <div className="w-100">
        <OwlCarousel className="w-100" items={3} margin={15} {...options}>
          {this.props.toolkit.map((product, index) => (
            <div key={index} className="itemst">
              <div className="dashboardProduct">
                <h2>
                  <a title={product.title} href="/">
                    <img src={product.socialtype} alt={product.title}/>
                  </a>
                </h2>
                <h3>{product.title}</h3>
                <p>{product.text} </p>
                <div className="d-flex justify-content-end">
                  {/* <a
                    className="btn btn-wishlist"
                    href="javascript:void(0)"
                    onClick={(e) => {
                      wishlist(e);
                    }}
                  >
                    <i className="fas fa-heart"></i>
                  </a> */}
                  <Link className="btn btn-next" to={product.link}>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}
