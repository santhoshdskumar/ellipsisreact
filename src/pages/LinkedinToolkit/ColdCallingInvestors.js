import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Tab,
  Tabs,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ToolkitNotification } from './../../components/ToolkitNotification';
import axios from 'axios';
import { AllNotificationData, FavNotificationData } from '../NotificationData';
class GoogleAds extends React.Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
        valueone:'',
        valueTwo:'',
        valueThree:'',
        valueFour:'',
        company: [],
        problem: [],
        market: [],
        traction: [],
        consumedData:null,
        allCount:'',
        form: {
          company: "",
          problem: "",
          market: "",
          traction:'',
        },
        formErrors: {
          company: null,
          problem: null,
          market: null,
          traction:null,
        }
    };
  }
  handleChange = (e) => {
    const { name, value, checked } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};
    if (name === "language") {
      // handle the change event of language field
      if (checked) {
        // push selected value in list
        formObj = { ...form };
        formObj[name].push(value);
      } else {
        // remove unchecked value from the list
        formObj = {
          ...form,
          [name]: form[name].filter(x => x !== value)
        };
      }
    } else {
      // handle change event except language field
      formObj = {
        ...form,
        [name]: value
      };
    }
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "password" || name === "confirmPassword") {
        let refValue = this.state.form[
          name === "password" ? "confirmPassword" : "password"
        ];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
        if (!errorMsg && refValue) {
          formErrorsObj.confirmPassword = null;
          formErrorsObj.password = null;
        }
      } else {
        const errorMsg = this.validateField(
          name,
          name === "language" ? this.state.form["language"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "company":
        if (!value) errorMsg = "Please fill the required field.";
        break;
      case "problem":
          if (!value) errorMsg = "Please fill the required field.";
          break;
      case "market":
            if (!value) errorMsg = "Please fill the required field.";
            break;
      case "traction":
      if (!value) errorMsg = "Please fill the required field.";
      break;
      default:
        break;
    }
    return errorMsg;
  };

  
  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;
      if (x === "password" || x === "confirmPassword") {
        refValue = form[x === "password" ? "confirmPassword" : "password"];
      }
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };


  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    console.log("Data: ", form);
  };

  formSubmit(e) {
    e.preventDefault();
    const coldcalling = {
      company: this.state.company,
      problem: this.state.problem,
      market: this.state.market,
      traction: this.state.traction,
    }
    axios.post("https://app2.ellipsis-ai.com/api/v1/coldcalling/", coldcalling,{auth:{
      username: 'jaffrinkirthiga@gmail.com',
      password: 'demo@123'
    }},).then(res => {
      let retData = res.data.data.output;
       this.setState({
         consumedData:retData
       })
       this.setState({
         allCount:retData.length
       })
    });
  };

  wordCount(event) {
    this.setState({ valueone:event.target.value });
  }

  wordCountTwo(event) {
    this.setState({ valueTwo:event.target.value });
  }

  wordCountThree(event) {
    this.setState({ valueThree:event.target.value });
  }
  wordCountFour(event) {
    this.setState({ valueFour:event.target.value });
  }

  render() {
    let count = 0,
    lengthOne = this.state.valueone?this.state.valueone.length:0,
    lengthTwo = this.state.valueTwo?this.state.valueTwo.length:0,
    lengthThree= this.state.valueThree?this.state.valueThree.length:0,
    lengthFour = this.state.valueFour?this.state.valueFour.length:0;
    const { form, formErrors } = this.state;
    const Button = styled.button`
      background: #5433ff;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      text-align: center;
      display: block;
      width: 100%;
      letter-spacing:0.05rem;
      border: 1px solid #5433ff;
      margin-bottom: 30px;
      &:hover {
        background: #fff;
        color: #5433ff;
        transition: 0.3s ease-in;
      }
    `;
    return (
      <React.Fragment>
        <h1 class="headTitle">LinkedIn Toolkit</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Cold Calling Investors</h3>
              </Card.Header>
              <Card.Body>
                <p>Stand out among hundreds of cold calling emails</p>
                <Form className="p-0" onSubmit={this.formSubmit}>
                  <Form.Group className="mb-4" controlId="company">
                    <Form.Label>Enter your company name*</Form.Label>
                    <Form.Control type="text" name="company" value={this.state.company} maxLength="20" 
                    onChange={e => { this.wordCount(e); this.handleChange(e)}}
                    />
                    {formErrors.company && (
                      <span className="err">{formErrors.company}</span>
                    )}
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="problem">
                    <Form.Label>What problem does your company solve*</Form.Label>
                    <Form.Control type="text" maxLength="20" name="problem"  value={this.state.problem}   
                    onChange={e => { this.wordCountTwo(e); this.handleChange(e)}}
                    />
                    {formErrors.problem && (
                      <span className="err">{formErrors.problem}</span>
                    )}
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="market">
                    <Form.Label>How big is the market*</Form.Label>
                    <Form.Control type="text" maxLength="20" name="market"  value={this.state.market}   
                    onChange={e => { this.wordCountThree(e); this.handleChange(e)}}
                    />
                    {formErrors.market && (
                      <span className="err">{formErrors.market}</span>
                    )} 
                    <p className="float-end"><span>{lengthThree}/</span><span>20</span></p>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="traction">
                    <Form.Label>Outline your traction so far*</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="traction"
                      value={this.state.traction}
                      onChange={e => { this.wordCountFour(e); this.handleChange(e)}}
                      />
                    {formErrors.traction && (
                      <span className="err">{formErrors.traction}</span>
                    )} 
                    <p className="float-end"><span>{lengthFour}/</span><span>120</span></p>
                  </Form.Group>
                  <Button class="update" type="submit"  onClick={this.handleSubmit}>
                    Generate Copy
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}  lg={8} sm={12} className="NotificationEdit">
            <Card>
              <Tabs
                transition={false}
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="all" title={`All ${this.state.allCount}`}>
                  <ToolkitNotification notifcation={this.state.consumedData} />
                </Tab>
                <Tab eventKey="favourite" title="Favourite(1)">
                  <ToolkitNotification notifcation={FavNotificationData} />
                  <Link to="/workspaceedit" className="viewAll">Edit your fav items &gt; &gt;</Link>
                </Tab>
              </Tabs>
              <div className="clearConsole">
                <a onClick={this.resetInputField} className="clear">Clear Output</a>
                <a href="#" className="clear">Select All</a>
              </div>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default GoogleAds;
