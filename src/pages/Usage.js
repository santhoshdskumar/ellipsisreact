import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {Table, Row, Card, Col} from 'react-bootstrap';
import axios from 'axios';

class Usage extends React.Component{
        constructor(){
        super();
        this.state = {
                subscription_type:'',
                date:'',
                count:'',
                remaining_credits:'',
                consumedData:'',
        }
        }

        async componentDidMount() {
                        const response = await axios.get('https://app2.ellipsis-ai.com/api/v1/userdata/36');
                        this.setState({ consumedData: response.data })
                    
            }

render() {
        console.log(this.state.consumedData, 'usage api');
return (
        <Row>
                <Col xs={12}>
                <Card >
                        <Card.Header>
                        <h3>Usage</h3>
                        </Card.Header>
                        <Card.Body>
                        <div className="divTable" >
                        <div className="divTableBody tableHead">
                        <div className="divTableRow">
                        <div className="divTableCell">Type</div>
                        <div className="divTableCell">Date</div>
                        <div className="divTableCell">Credits Used</div>
                        <div className="divTableCell">Credits Remaining</div>
                        </div>
                        </div>

                        <div className="divTableBody">
                        <div class="divTableRow">
                                <div class="divTableCell">
                                <h5>Total</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>2021-05-12</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>5</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>1</h5>
                        </div>
                        </div>
                        <div class="divTableRow">
                                <div class="divTableCell">
                                <h5>Total</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>2021-05-12</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>5</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>1</h5>
                        </div>
                        </div>
                        <div class="divTableRow">
                                <div class="divTableCell">
                                <h5>Total</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>2021-05-12</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>5</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>1</h5>
                        </div>
                        </div>
                        <div class="divTableRow">
                                <div class="divTableCell">
                                <h5>Total</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>2021-05-12</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>5</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>1</h5>
                        </div>
                        </div>
                        <div class="divTableRow">
                                <div class="divTableCell">
                                <h5>Total</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>2021-05-12</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>5</h5>
                        </div>
                        <div class="divTableCell">
                                <h5>1</h5>
                        </div>
                        </div>
                        </div>
                </div>
                        </Card.Body>
                        </Card>

                </Col>
                
                        </Row>
                    )
           }

}

export default Usage;