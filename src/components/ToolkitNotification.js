import React, { Component } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ToolkitNotification = (props) => {
  let data = props;
  if(data.notifcation==null){
    data = null;
  }
  console.log(data);
  return (
    <React.Fragment>
      {data == null? <div>Data Not Found</div> : data.notifcation.map((item) => (
        <Alert>
          <div>
            <h6>{item.suggestion.Headline}</h6>
            <p>{item.suggestion.Description}</p>
            <span className="text-right float-end">{item.wishlist}</span>
          </div>
        </Alert>
      ))} 
      
    </React.Fragment>
    
  );
};

