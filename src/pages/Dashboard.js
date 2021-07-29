import React, { Component } from 'react';
import { products } from './products';
import { toolkit } from './products';
import { projects } from './projects';

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
    let filteredData = products.filter((i, v) => {
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
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-8">
              <div class="card">
                <div class="card-header">
                  <h3>Most Popular Tools</h3>
                </div>
                <div className="card-body">
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
                      <ProductSlider toolkit={toolkit} />
                    </Tab>
                    <Tab eventKey="email" title="Email Toolkit">
                      <ProductSlider toolkit={products} />
                    </Tab>
                    <Tab eventKey="linkedin" title="Linkedin Toolkit">
                      <ProductSlider toolkit={toolkit} />
                    </Tab>
                    <Tab eventKey="website" title="Website Toolkit">
                      <ProductSlider toolkit={products} />
                    </Tab>
                    <Tab eventKey="artical" title="Artical Toolkit">
                      <ProductSlider toolkit={toolkit} />
                    </Tab>
                    <Tab eventKey="writing" title="Writing Toolkit">
                      <ProductSlider toolkit={products} />
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
