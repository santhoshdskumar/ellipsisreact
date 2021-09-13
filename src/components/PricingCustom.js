import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const PricingCustom = (props) => {
  return (
    <>
      {props.pricing.map((product, index) => {
        return (
          <Col
            xl={4}
            lg={4}
            md={12}
            sm={12}
            className={product.product.name}
            id={product.price.currency}
          >
            {props.children}
            <Card as="Card" className={product.activeShows} >
              <h3>{product.product.name}</h3>
              <p className="descr">{product.product.metadata.audience}</p>
              <p className="price">
                <span className="pro">
                  {product.price.currency}
                  {parseFloat(product.price.unit_amount)}
                </span>
                <span className="dea">per user/month</span>
              </p>
               <ul className="">
                {product.product.features.map((offers, index) => {
                  return <li>{offers}</li>;
                })}
              </ul>

              <a href="https://appsumo.com/products/ellipsisai/" target="_blank" className="update">Start Now</a>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default PricingCustom;
