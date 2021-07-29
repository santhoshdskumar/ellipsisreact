import React, { Component } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ToolkitNotification = (props) => {
  return (
    <React.Fragment>
      {props.notifcation.map((item) => (
        <Alert>
          <p>
            {item.name}
            <span className="text-right float-end">{item.wishlist}</span>
          </p>
        </Alert>
      ))}
    </React.Fragment>
  );
};
