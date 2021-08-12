import React from "react";
import { Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';

class BookFavorite extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <h2>Favorite</h2>
        <div>
        {this.props.booksfav.map((product, index) => {
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
                  {/* <input
                      type="checkbox"
                      id={`custom-checkbox-${product.title}`}
                      value={product.title}
                      name={product.title}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                  <label htmlFor={`custom-checkbox-${product.title}`}></label> */}
                    <button onClick={() => this.props.delete(product.id)}>
                    Delete from Favorite
                    </button>
                  <Link
                    className="btn btn-next  align-self-center"
                    to={product.link}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}

export default BookFavorite;
