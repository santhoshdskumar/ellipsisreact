import React, { Component } from 'react';
import { products } from './products';
import { toolkit } from './products';
import { projects } from './projects';
import { Tabs, Tab, Container, NavDropdown } from 'react-bootstrap';
import ProductSlider from '../components/ProductSlider';
import ToolkitCustom from '../components/ToolkitCustom';
import ProjectCustom from '../components/ProjectsCustom';
import { Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
class ProjectEdit extends React.Component {
  render() {
    const Button = styled.button`
      background: linear-gradient(
        180deg,
        #e613d5 0%,
        rgba(84, 51, 255, 0.69) 100%
      );
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      border: 1px solid #e613d5;
      padding: 7px 20px;
      text-alignb: right;
      float: right;
      color: #fff;
      &:hover {
        background: #fff;
        color: #e613d5;
        transition: 0.3s ease-in;
      }
    `;

    const h1 = styled.h1`
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */

      letter-spacing: 0.05em;
      text-transform: uppercase;

      color: #000000;
    `;

    return (
      <React.Fragment>
        <div className="ellipsisUpgrade">
          <Row>
            <Col xs="6" lg="6" md="6" sm="6">
              <Box>
                <h3>Ellipsis-Al</h3>
                <p>10x Faster & Better Copywriting</p>
              </Box>
            </Col>
            <Col xs="6" lg="6" md="6" sm="6" className="align-self-center">
              <Button class="update" type="submit">
                <Link to="/Pricing">Upgrade</Link>
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="mt-4">
          <Col xs={9} md={9} lg={9}>
            <Card>
              <Card.Header>
                <h3>My Projects</h3>
              </Card.Header>
              <Card.Body>
                <ProjectCustom projects={projects}></ProjectCustom>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 projectEdit">
          <Col>
            <Card>
              <Tabs
                transition={false}
                defaultActiveKey="digital"
                id="uncontrolled-tab-example"
                className="m-0"
              >
                <Tab eventKey="digital" title="Digital Ads">
                  <ProductSlider toolkit={toolkit} />
                </Tab>
                <Tab eventKey="email" title="Email Toolkit" as="Card.Header">
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
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ProjectEdit;
