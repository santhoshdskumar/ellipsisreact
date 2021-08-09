import React, { Component } from 'react'
import {Table, Row, Card, Col} from 'react-bootstrap';

export const Usage = () =>{
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