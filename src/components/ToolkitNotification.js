import React, { Component, useState, useRef } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LandingImage from './../assets/images/landing_image.png';
import CopyToClipboard from 'react-copy-to-clipboard';

export const ToolkitNotification = (props) => {
  let data = props;
  if (data.notifcation == null) {
    data = null;
  }
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  }

  return (
    <React.Fragment>
      {data == null ? (
        <div>
          <img src={LandingImage} className="img-fluid"></img>
        </div>
      ) : (
        data.notifcation.map((item) => (
          <Alert key={item.suggestion.id}>
            <div onCopy={item.copy}>
              <h6 data-value={item.suggestion.Headline}>
                {item.suggestion.Headline}
              </h6>
              <p value={item.suggestion.Description}>
                {item.suggestion.Description}
              </p>
              <div className="randomIcons">
                <input
                  type="radio"
                  onChange={() => data.add(item.id)}
                  title="Select"
                  id={item.id}
                ></input>
                {/* <span className="text-right float-end"  onClick={() => data.add(item.id)}></span> */}
                <CopyToClipboard
                  onCopy={props.copy}
                  text={item.suggestion.Description}
                >
                  <span className="text-right float-end">
                    <i class="fas fa-copy"></i>
                  </span>
                </CopyToClipboard>
              </div>
            </div>
          </Alert>
        ))
      )}
    </React.Fragment>
  );
};
