import React, { useEffect } from 'react';
import { basic, standard, premium } from '../pages/PricingData';
import PricingCustom from '../components/PricingCustom';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import '../assets/scss/_pricing.scss';
import styled from 'styled-components';
import axios from 'axios';
let access_token = localStorage.getItem('login_access_token');

const Pricing = () => {
  useEffect(() => {
    axios
      .get(`https://app2.ellipsis-ai.com/pricing_tier/`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  });
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
    <React.Fragment>
      <Row className="planning">
        <Col>
          <h3>Choose your plan</h3>
          <p>33% launch offer discount</p>
        </Col>
      </Row>
      <Row className="pricing">
        <Tabs
          transition={false}
          defaultActiveKey="Yearly"
          id="uncontrolledTbas"
          className="mb-3"
        >
          <Tab eventKey="Yearly" title="Yearly">
            <Row>
              <PricingCustom pricing={basic}></PricingCustom>
              <PricingCustom pricing={standard}>
                <button className="poular">Popular</button>
              </PricingCustom>
              <PricingCustom pricing={premium}></PricingCustom>
            </Row>
          </Tab>
          <Tab eventKey="Monthly" title="Monthly">
            <Row>
              <PricingCustom pricing={basic}></PricingCustom>
              <PricingCustom pricing={standard}>
                <button className="poular">Popular</button>
              </PricingCustom>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </React.Fragment>
  );
};

export default Pricing;
