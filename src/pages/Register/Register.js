import React from 'react';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Register =()=>{
    return (
        <React.Fragment>
        <Row className="row no-gutter reverse-order">
            <div class="col-one-half middle padding">
                <div class="max-width-s">
                <h5>Welcome!</h5>
                <p class="paragraph">Enter your details to create an account.</p>
                <Form className="main-form p-0" >
                <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="name">Name:</Form.Label>
                        <Form.Control type="text"  id="name" name="first_name" />
                 </Form.Group>
                 <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="email">Email:</Form.Label>
                        <Form.Control type="email"  id="email" name="email" />
                 </Form.Group>
                 <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="password">Password:</Form.Label>
                        <Form.Control type="password"  id="password" name="password" />
                 </Form.Group>

                 <Form.Group className="mb-4" controlId="name">
                 <input id="tandc" type="checkbox" name="tandc" />
                 <label for="tandc" class="checkbox">I agree to the <a href="https://www.ellipsis-ai.com/terms-conditions" target="_blank">Terms &amp; Conditions</a></label>
                 </Form.Group>

                <Form.Group>
                    <button className="update">Create Account</button>
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

export default Register;