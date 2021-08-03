import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Edit from './../assets/images/edit.svg';
import Delete from './../assets/images/delete.svg';

export default class ProjectCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.projects,
      show: false,
      name: [],
      modalInputName: '',
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  onRemoveItem = (slno) => {
    this.setState((state) => {
      const list = state.list.filter((item) => item.slno !== slno);
      return {
        list,
      };
    });
  };

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
      background: #5433ff;
      width:125px;
      letter-spacing:0.08rem;
      mix-blend-mode: normal;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.11);
      border-radius: 8px;
      border: 1px solid #5433ff;
      margin-bottom: 30px;
      &:hover {
        background: rgba(90, 136, 213, 0.08);
        color: #5433ff;
        transition: 0.3s ease-in;
      }
    `;
    return (
      <>
        <div className="table">
          <table className="table borderless">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Created Date</th>
                <th>Description</th>
                <th>Actions</th>
                <th className="view">View</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((item) => (
                <tr>
                  <td>
                    <h5>{item.slno}</h5>
                  </td>
                  <td>
                    <h5><Link to="/Alltools/">{item.name}</Link></h5>
                  </td>
                  <td>
                    <h5>{item.date}</h5>
                  </td>
                  <td>
                    <h5>{item.text}</h5>
                  </td>

                  <td>
                    <ul className="pl-0">
                      <li className="edit" onClick={this.showModal}>
                          <img src={Edit}></img>
                      </li>
                      <li
                        className="delete remove"
                        onClick={() => this.onRemoveItem(item.slno)}
                      >
                        <img src={Delete}></img>
                      </li>
                    </ul>
                  </td>
                  <td className="view">
                    <h5>
                      <a href="#">{item.view}</a>
                    </h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="modal-dialog m-0">
            <div className="modal-content">
              <div class="modal-header">
                <h2>Edit Project</h2>
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
                  <Form.Label>Industry Type</Form.Label>
                <select aria-label="Default select example" className="form-control">
                <option>Ecommerce</option>

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
      </>
    );
  }
}
