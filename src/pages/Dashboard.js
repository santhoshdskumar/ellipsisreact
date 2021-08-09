import React, { Component } from 'react';
import { Digital, Email, Linkedin, Event, Website, Writing, Article } from './products';
import { projects } from './projects';
import {Link} from 'react-router-dom';
import { Tabs, Tab, Container, NavDropdown } from 'react-bootstrap';
import ProductSlider from '../components/ProductSlider';
import ToolkitCustom from '../components/ToolkitCustom';
import ProjectCustom from '../components/ProjectsCustom';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topFour: [],
      reVAl: [],
    };
  }
  componentDidMount() {
    let filteredData = Digital.filter((i, v) => {
      return v <= 2;
    });
    this.setState({ topFour: filteredData });
  }
  render() {
    const { name, slno } = projects;
    return (
      <div className="w-100">
        <h1 className="headTitle">Dashboard</h1>
        <div className="container w-100">
          <div className="row w-100">
            <div className="col col-sm-12 col-lg-4 projectList">
              <div className="card h-100">
                <div className="card-header">
                  <h3>My Workspace</h3>
                </div>
                <div className="card-body">
                  <ProjectCustom projects={projects} />
                  <Link to="/Workspace" className="viewAll">View All &gt;&gt;</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-8">
              <div class="card">
                <div class="card-header">
                  <h3>Favourite Tools</h3>
                </div>
                <div className="card-body dashboard-row">
                  <ToolkitCustom
                    toolkit={this.state.topFour}
                    className="row justify-content-between"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 w-100">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="card w-100">
                <div className="card-header">
                  <h3>Tools</h3>
                </div>
                <div className="card-body w-100">
                  <Tabs
                    transition={false}
                    defaultActiveKey="digital"
                    id="uncontrolled-tab-example"
                    className="mb-3 w-100"
                  >
                    <Tab
                      eventKey="digital"
                      title="Digital Ads"
                      className="w-100"
                    >
                      <ProductSlider toolkit={Digital} />
                    </Tab>
                    <Tab eventKey="email" title="Emails ">
                      <ProductSlider toolkit={Email} />
                    </Tab>
                    <Tab eventKey="linkedin" title="LinkedIn ">
                      <ProductSlider toolkit={Linkedin} />
                    </Tab>
                    <Tab eventKey="website" title="Website ">
                      <ProductSlider toolkit={Website} />
                    </Tab>
                    <Tab eventKey="artical" title="Articles ">
                      <ProductSlider toolkit={Article} />
                    </Tab>
                    <Tab eventKey="writing" title="Writing ">
                      <ProductSlider toolkit={Writing} />
                    </Tab>
                     <Tab eventKey="writing" title="Event Promotions ">
                      <ProductSlider toolkit={Event} />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
