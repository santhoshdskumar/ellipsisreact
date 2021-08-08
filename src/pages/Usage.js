import React, { Component } from 'react'
import {Table, Row, Card, Col} from 'react-bootstrap';

export const Usage = () =>{
    return (
        <Row>
            <Col xs={12}>
                <Card >
                    <Card.Header>
                        Usage
                    </Card.Header>
                    <Card.Body>
                    <Table className="borderless">
                    <thead>
                        <tr>
                        <th>TYpe</th>
                        <th>Date</th>
                        <th>Credits Used</th>
                        <th>Credits Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Total</td>
                        <td>2021-05-12</td>
                        <td>5</td>
                        <td>9995</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>2021-05-12</td>
                        <td>5</td>
                        <td>9995</td>
                        </tr>
                        <tr>
                        <td>Total</td>
                        <td>2021-05-12</td>
                        <td>5</td>
                        <td>9995</td>
                        </tr>
                    </tbody>
                     </Table>
                    </Card.Body>
                    </Card>

            </Col>

        </Row>
    )
}