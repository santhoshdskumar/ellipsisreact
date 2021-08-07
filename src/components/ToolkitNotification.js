import React, { Component } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ToolkitNotification = (props) => {
  let data = props;
  if(data.notifcation!=null){
    data =  props.notifcation.data.output;
  } else {
    data = null;
  }
  return (
    <React.Fragment>
      {data == null? <div>Data Not Found</div> : data.map((item) => (
        <Alert>
          <p>
            {item.suggestion.Headline}
            <span className="text-right float-end">{item.wishlist}</span>
          </p>
        </Alert>
      ))} 
      
    </React.Fragment>
  );
};
