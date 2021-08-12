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
          <div onCopy={item.copy}>
            <h6>{item.suggestion.Headline}</h6>
            <p>{item.suggestion.Description}</p>
            <div className="randomIcons">
            <span className="text-right float-end"><i class="fas fa-plus"></i></span>
            <span className="text-right float-end"><i class="fas fa-copy"></i></span>
            </div>
          </div>
        </Alert>
      ))} 
        <button className="loadmore">Load More</button>
      
    </React.Fragment>
    
  );
};

