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
import axios from 'axios';
import { ToolkitNotification } from './../../components/ToolkitNotification';
import { FavNotification } from './../../components/FavNotification';
import { AllNotificationData, FavNotificationData } from '../NotificationData';
import LoadingSpinner from '../../components/LoadingSpinner';
import { CSVLink } from "react-csv";
import CsvDownload from 'react-json-to-csv'
import CopyToClipboard from 'react-copy-to-clipboard';
class GoogleAds extends React.Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
    company: [],
    background: [],
    promo: [],
    consumedData:null,
    loading: false,
    copied: false,
    isBoxVisible:false,
    booksfav: [],
    favCount:'',
    csvData:'',
    allCount:'',
        form: {
          valueone:'',
          valueThree:'',
          valueFour:'',
          company: "",
          background: "",
          promo: "",
          
        },
        formErrors: {
          company: null,
          background: null,
          promo: null,
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
      case "background":
          if (!value) errorMsg = "Please fill the required field.";
          break;
      case "promo":
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

  formSubmit(e) {
    e.preventDefault();
    const abtestings = {
      company: this.state.company,
      background:  this.state.background,
      promo: this.state.promo,
    }
    axios.post("https://app2.ellipsis-ai.com/api/v1/abtesting/", abtestings,{auth:{
      username: 'jaffrinkirthiga@gmail.com',
      password: 'demo@123'
    }},this.setState({loading:true}),).then(res => {
      let retData = res.data.data.output;
      console.log(retData, 'Api data');
       this.setState({
         consumedData:retData,loading: false,
       })
       this.setState({
         allCount:retData.length
       })
    });
  
    setTimeout(() => {
     let csvDatas = this.state.consumedData.map(item => ({
      Headline: item.suggestion.Headline,
      Description: item.suggestion.Description
    }))
     
     const objectToCsv = (csvDatas) => {
      const csvRows = [];
      const headers = Object.keys(csvDatas[0])
      csvRows.push(headers.join(','));
      for (const row of csvDatas) {
        const values = headers.map(header => {
          const escaped = ('' + row[header]).replace(/"/g, '\\"')
          return `"${escaped}"`
        })
        csvRows.push(values.join(','))
      }
      return csvRows.join('\n')
    }
    let csvData = objectToCsv(csvDatas);
    console.log(objectToCsv(csvDatas));
    
    this.setState({
      csvData:csvData
    })
    }, 6000);
  };
  onCopy = () => {
    this.setState({copied: true});
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


  
    resetForm = () => {
      this.setState({ 
        consumedData:null, 
    })
    this.setState({ 
        allCount:''
    })
    }

  wordCount(event) {
    this.setState({ valueone:event.target.value });
  }

  wordCountTwo(event) {
    this.setState({ valueThree:event.target.value });
  }

  wordCountThree(event) {
    this.setState({ valueFour:event.target.value });
  }
  addToFavorite = id => {
    const data = this.state.consumedData.find(item => item.id === id);
    this.setState({
      booksfav: [...this.state.booksfav, data]
    });
    this.setState({
      favCount:[...this.state.booksfav].length
    })
  };

  deleteToFavorite = id => {
    const hapus = this.state.booksfav.filter(item => item.id !== id);
    this.setState({ booksfav: hapus });
  };
  render() {
    let count = 0,
    lengthOne = this.state.valueone?this.state.valueone.length:0,
    lengthTwo = this.state.valueThree?this.state.valueThree.length:0,
    lengthThree = this.state.valueFour?this.state.valueFour.length:0;
    const { form, formErrors, loading, isBoxVisible } = this.state;
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
        <h1 class="headTitle">Digital Ads</h1>
        <Row>
          <Col xs={12} lg={4} sm={12} md={12} className="mb-md-5 toolkitWebsite">
            <Card>
              <Card.Header>
                <h3>Ad Copies For A/B Testing</h3>
              </Card.Header>
              <Card.Body>
                <p>Generate multiple variations for AB testing</p>
                <Form className="p-0"  onSubmit={this.formSubmit}>
                  <Form.Group className="mb-4" controlId="company">
                    <Form.Label>Enter company / product name*</Form.Label>
                    <Form.Control type="text" name="company" value={this.state.value} maxLength="20" 
                    onChange={e => { this.wordCount(e); this.handleChange(e)}}
                    />
                    {formErrors.company && (
                      <span className="err">{formErrors.company}</span>
                    )}
                    <p className="float-end"><span>{lengthOne}/</span><span>20</span></p>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="background">
                    <Form.Label>Who is your audeince*</Form.Label>
                    <Form.Control type="text" maxLength="20" name="background"  value={this.state.value}   
                     onChange={e => { this.wordCountTwo(e); this.handleChange(e)}}
                     />
                    <p className="float-end"><span>{lengthTwo}/</span><span>20</span></p>
                     {formErrors.background && (
                      <span className="err">{formErrors.background}</span>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="promo">
                    <Form.Label>Description of your background</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      maxLength="140"
                      name="promo"
                      value={this.state.value}
                      onChange={e => { this.wordCountThree(e); this.handleChange(e)}}
                    />
                    <p className="float-end"><span>{lengthThree}/</span><span>120</span></p>
                    {formErrors.promo && (
                      <span className="err">{formErrors.promo}</span>
                    )}
                  </Form.Group>
                  <Button class="update" type="submit" onClick={this.handleSubmit} >
                    Generate Copy
                  </Button>
                  <button type="reset" onClick={this.resetForm} className="clear">Clear Outputs</button>
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
                {loading ? <LoadingSpinner  /> : <ToolkitNotification notifcation={this.state.consumedData}   add={this.addToFavorite}  copy={this.onCopy}/>}
                </Tab>
                <Tab eventKey="slected" title={`Selected ${this.state.favCount}`}> 
                  <FavNotification  booksfav={this.state.booksfav}
                  delete={this.deleteToFavorite} ></FavNotification>
                  <Link to="/workspaceedit" className="viewAll">Edit your fav items &gt; &gt;</Link>
                </Tab>
              </Tabs>
              <div className="clearConsole">
              {/* <CsvDownload data={this.state.consumedData} /> */}
              <CSVLink data={this.state.csvData} filename={"abtesting.csv"}>Download</CSVLink>
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
