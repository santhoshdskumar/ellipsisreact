import React, { useEffect, useState } from 'react';
import { basic, standard, premium } from '../pages/PricingData';
import PricingCustom from '../components/PricingCustom';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import '../assets/scss/_pricing.scss';
import styled from 'styled-components';
import axios from 'axios';
let access_token = localStorage.getItem('login_access_token');

const Pricing = () => {
  const [yearData, setstateyearData] = useState([]);
  const [monthlyData, setstatemonthlyData] = useState([]);

  axios
    .get(`https://app2.ellipsis-ai.com/pricing_tier/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      let resVal;
      response.data.yearly_prices.map((res) => {
        resVal = res;
      });
      setstateyearData(response.data.yearly_prices);
      setstatemonthlyData(response.data.monthly_prices);
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
        <ul class="nav nav-tabs d-none" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="INR-tab"
              data-bs-toggle="tab"
              data-bs-target="#INR"
              type="button"
              role="tab"
              aria-controls="INR"
              aria-selected="true"
            >
              INR
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="USD-tab"
              data-bs-toggle="tab"
              data-bs-target="#USD"
              type="button"
              role="tab"
              aria-controls="USD"
              aria-selected="false"
            >
              USD
            </button>
          </li>
        </ul>
        <Tabs
          transition={false}
          defaultActiveKey="Yearly"
          id="uncontrolledTbas"
          className="mb-3 priceTab"
        >
          <Tab eventKey="Yearly" title="Yearly">
            <Row>
              <PricingCustom pricing={yearData}></PricingCustom>
            </Row>
          </Tab>
          <Tab eventKey="Monthly" title="Monthly">
            <Row>
              <PricingCustom pricing={monthlyData}></PricingCustom>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </React.Fragment>
  );
};

export default Pricing;
