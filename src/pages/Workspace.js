import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import ProjectCustom from '../components/ProjectsCustom';
import { projects } from './projects';
class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: [],
      modalInputName: '',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log(value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(item) {
    this.setState({ name: this.state.item.name });
    this.modalClose();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  modalClose() {
    this.setState({
      modalInputName: '',
      show: false,
    });
  }
  render() {
    const Button = styled.button`
    background: #fff;
    width:125px;
    letter-spacing:0.08rem;
    mix-blend-mode: normal;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
    border-radius: 8px;
    border: 1px solid #5433ff;
    margin-bottom: 30px;
    float:right;
    padding:8px 10px;
    color:#5433ff;
    &:hover {
      background: rgba(90, 136, 213, 0.08);
      color: #5433ff;
      transition: 0.3s ease-in;
    }
  `;
    return (
      <div className="workspace">
        <h1 className="headTitle">WorkSpace</h1>
        <Button  onClick={this.showModal}>Add Project</Button>
        <ProjectCustom projects={projects}></ProjectCustom>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="modal-dialog m-0">
            <div className="modal-content">
              <div class="modal-header">
                <h2>Add Project</h2>
              </div>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="My Portfolio"
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Project Description"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <select aria-label="Default select example" className="form-control">
                    <option>Ecommerce</option>
                    <option value="1">SaaS</option>
                    <option value="2">Enterprise Tech
                    </option>
                     <option value="3">Blockchain/ Crypto
                    </option>
                    <option>Fintech</option>
                    <option>Edtech</option>
                    <option>Martech</option>
                   </select>
                  </Form.Group>
                <Button
                  class="update"
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Update 
                </Button>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Workspace;
