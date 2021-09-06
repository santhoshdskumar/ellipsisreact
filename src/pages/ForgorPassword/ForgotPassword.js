import React from 'react';
import { Row, Col,  Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ForgotPassword =()=>{
    return (
        <React.Fragment>
        <Row className="row no-gutter reverse-order">
            <div class="col-one-half middle padding">
                <div class="max-width-s">
                <h5>Password reset</h5>
                <p class="paragraph">Forgotten your password? Enter your email address below, and we’ll email instructions for setting a new one.</p>
                <Form className="main-form p-0" >
                 <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="email">Email:</Form.Label>
                        <Form.Control type="email"  id="email" name="email" />
                 </Form.Group>
                <Form.Group>
                    <button className="update">Reset my Password</button>
                </Form.Group>
                </Form>

                </div>
                <div class="text-center max-width-s already">
                <span class="muted">Already have an account? </span><Link to="/Login">Login</Link>
                </div>
            </div>
            <div class="col-one-half bg-image-05 featured-image"></div>
            </Row>
        </React.Fragment>
    )
}

export default ForgotPassword;
