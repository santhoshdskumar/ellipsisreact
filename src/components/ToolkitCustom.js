import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';

const ToolkitCustom = (props) => {
  let wishlist = (e) => {
    window.alert('The product has been shared!');
  };
  const [checkedState, setCheckedState] = useState(
    new Array(props.length).fill(false)
  );
  const [total, setTotal] = useState(0);
  const [favoriteCats, setFavoriteCats] = useState([])

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedState(updatedCheckedState);
  };

const favoriteCat = cat => {
    setFavoriteCats(favoriteCats.concat(cat))
  }


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
                {/* <input
                    type="checkbox"
                    id={`custom-checkbox-${product.title}`}
                    value={product.title}
                    name={product.title}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                <label htmlFor={`custom-checkbox-${product.title}`}></label> */}
                <div
                onClick={handleToggleFavourite} id={product.id}
              >
                {isFavourited ? (
                  'Add here your full heart icon'
                ) : (
                  'Add here your empty heart icon'
                )}
              </div>
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
  );
};

export default ToolkitCustom;
