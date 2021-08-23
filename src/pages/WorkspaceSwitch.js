import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  Row,
  Col,
  Card,
  Button,
  Alert,
  Tab,
  Tabs,
  ListGroup,
  ListGroupItem,
  Form,
} from 'react-bootstrap';
import { FavNotification } from '../components/FavNotification';
import { Link } from 'react-router-dom';

export const Ckeditor5Build = (props) => {
  const handlingDragDrop = (event) => {
    const draggedValue = event.target.dataset['value'];
    // event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('text/plain', draggedValue);
  };
  // const saveditemss = localStorage.getItem("data");

  let retData = localStorage.getItem('localData');
  let parsedValue = JSON.parse(retData);
  let lovalD = [];
  const [itemss, setItemss] = useState(parsedValue || []);
  lovalD.push(itemss);
  lovalD.map((item) => {
    return item.map((data) => {
      return console.log(data.suggestion.Headline);
    });
  });
  return (
    <div className="switchWorkspce">
      <Row>
        <Col>
          <ul className="nav switchNav d-none">
            <li>Switch Workspace</li>
            <li>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option>Ecommerce</option>
                    <option>Ecommerce</option>
                    <option value="1">SaaS</option>
                    <option value="2">Enterprise Tech</option>
                    <option value="3">Blockchain/ Crypto</option>
                    <option>Fintech</option>
                    <option>Edtech</option>
                    <option>Martech</option>
                  </select>
                </Form.Group>
              </Form>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5} md={12} sm={12}>
          <Card>
            <Card.Header>
              <h3>Selected Outputs</h3>
            </Card.Header>
            <Card.Body>
              <h3>Drag outputs to the content editor to edit/modify.</h3>
              <React.Fragment>
                {lovalD.map((item) => {
                  return (
                    <ListGroup onDragStart={handlingDragDrop}>
                      {item.map((data) => {
                        return (
                          <ListGroup.Item
                            data-value={data.suggestion.Description}
                            className="flow-field--item"
                            contentEditable="false"
                            draggable="true"
                          >
                            {data.suggestion.Description}
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  );
                })}
              </React.Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={7} md={12} sm={12}>
          <Card>
            <Card.Header>
              <h3>Content Editor</h3>
            </Card.Header>
            <Card.Body className="p-3">
              <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onInit={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      'height',
                      '200px',
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </Card.Body>
          </Card>
          {/* <Button className="update">Update</Button> */}
        </Col>
      </Row>
    </div>
  );
};
