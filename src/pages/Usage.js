import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Table, Row, Card, Col } from 'react-bootstrap';
import axios from 'axios';
let access_token = localStorage.getItem('login_access_token');
let user_id = localStorage.getItem('user_id');

class Usage extends React.Component {
  constructor() {
    super();
    this.state = {
      usage: '',
      consumedData: '',
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://app2.ellipsis-ai.com/api/v1/userdata/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    let activeUser = response.data.userdata.transactions.map((value, index) => {
      if (value.subscriptions.active === true) {
        return value.usage;
      }
    });
    this.setState({ consumedData: activeUser });
  }

  render() {
    let data = this.state.consumedData[0];
    if (data == null) {
      data = null;
    }

    return (
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h3>Usage</h3>
            </Card.Header>
            <Card.Body>
              <div className="divTable">
                <div className="divTableBody tableHead">
                  <div className="divTableRow">
                    <div className="divTableCell">Type</div>
                    <div className="divTableCell">Date</div>
                    <div className="divTableCell">Credits Used</div>
                    <div className="divTableCell">Credits Remaining</div>
                  </div>
                </div>

                <div className="divTableBody">
                  {data == null ? (
                    <div>
                      <p>No data found</p>
                    </div>
                  ) : (
                    this.state.consumedData[0].map((item) => (
                      <div class="divTableRow">
                        <div class="divTableCell">
                          <h5>{item.subscription_type}</h5>
                        </div>
                        <div class="divTableCell">
                          <h5>{item.date}</h5>
                        </div>
                        <div class="divTableCell">
                          <h5>{item.count}</h5>
                        </div>
                        <div class="divTableCell">
                          <h5>{item.remaining_credits}</h5>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Usage;
