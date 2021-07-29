import React from 'react';
import { Card } from 'react-bootstrap';

const ProductsCustom = (props) => {
  return (
    <React.Fragment>
      {props.products.map((data, index) => {
        return (
          <Card className={data.className}>
            <div>{data.icon}</div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default ProductsCustom;
