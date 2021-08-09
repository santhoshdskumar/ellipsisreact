import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
const Support = () => {
  const Button = styled.button`
    background: #5433ff;
    mix-blend-mode: normal;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    border: 1px solid #5433ff;
    margin-bottom: 30px;
    &:hover {
      background: #fff;
      color: #5433ff;
      transition: 0.3s ease-in;
    }
  `;
  const Box = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin: 10px 0px 30px;
    letter-spacing: 0.015em;
    color: #505050;
  `;
  return (
    <div className="support">
      <div className="card col-12 col-md-9">
        <div className="card-header">
          <h3>Contact Us</h3>
        </div>
        <div className="card-body" as="Card">
          <Box>
            Write us for for any queries, Our team will get in touch with you
            ASAP.
          </Box>

          <Form className="p-0">

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum is a description"
              />
            </Form.Group>
            <Button class="update" type="submit">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Support;
