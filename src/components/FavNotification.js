import React, { Component } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LandingImage from './../assets/images/landing_image.png';

export const FavNotification = (props) => {
    console.log(props);
  return (
    <React.Fragment>
      {props.booksfav.map((item) => (
        <Alert key={item.id}>
          <div >
            <h6>{item.suggestion.Headline}</h6>
            <p>{item.suggestion.Description}</p>
            <div className="randomIcons">
            <span className="text-right float-end"><i class="fas fa-copy"></i></span>
            </div>
          </div>
        </Alert>
      ))}; 
    </React.Fragment>
    
  );
};

