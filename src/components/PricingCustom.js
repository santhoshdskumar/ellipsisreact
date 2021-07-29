import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const PricingCustom = (props) => {
  const Button = styled.button`
    background: #5433ff;
    mix-blend-mode: normal;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    padding: 15px 0px;
    width: 165.62px;
    margin: 0 auto;
    color: #fff;
    border: 1px solid #5433ff;
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    &:hover {
      background: #fff;
      color: #5433ff;
      transition: 0.3s ease-in;
    }
  `;
  return (
    <>
      {props.pricing.map((product, index) => {
        return (
          <Col xl={4} lg={4} md={12} sm={2} className="mt-5">
            {props.children}
            <Card as="Card" className={product.activeShows}>
              <h3>{product.type}</h3>
              <p className="descr">{product.description}</p>
              <p className="price">
                <span className="pro">
                  {product.priceSym}
                  {product.priceRange}
                </span>
                <span className="dea">{product.priceB}</span>
              </p>
              <ul className="">
                {product.offers.map((offers, index) => {
                  return <li>{offers}</li>;
                })}
              </ul>
              <Button variant="primary">Start Now</Button>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default PricingCustom;
