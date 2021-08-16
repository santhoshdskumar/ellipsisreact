import React from 'react';
import { Row, Col, Card, Tabs, Tab, Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Register =()=>{
    return (
        <React.Fragment>
        <Row className="row no-gutter reverse-order">
            <div class="col-one-half middle padding">
                <div class="max-width-s">
                <h5>Welcome back.</h5>
                <p class="paragraph">Enter your details to create an account.</p>
                <Form className="main-form p-0">
                 <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="email">Email:</Form.Label>
                        <Form.Control type="email"  id="email" name="email" />
                 </Form.Group>
                 <Form.Group className="mb-4" controlId="name">
                        <Form.Label for="password">Password:</Form.Label>
                        <Form.Control type="password"  id="password" name="password" />
                        <Link to="/Register" className="form-help">Forgot password?</Link>F
                 </Form.Group>

                 <Form.Group className="mb-4" controlId="name">
                 <input id="tandc" type="checkbox" name="tandc" />
                 <label for="tandc" class="checkbox">Remomber Me</label>
                 </Form.Group>

                <Form.Group>
                    <button className="update">Log In</button>
                </Form.Group>
                </Form>

                </div>
                <div class="text-center max-width-s already">
                <span class="muted">Don't have an account? </span><Link to="/Register">Sign Up</Link>
                </div>
            </div>
            <div class="col-one-half bg-image-05 featured-image"></div>
            </Row>
        </React.Fragment>
    )
}

export default Register;