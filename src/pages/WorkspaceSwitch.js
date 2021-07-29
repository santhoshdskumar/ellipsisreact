import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Tab,
  Tabs,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class WorkspaceSwith extends React.Component {
  render() {
    return (
      <div className="switchWorkspce">
        <Row>
          <Col>
            <ul className="nav switchNav">
              <li>Switch Workspace</li>
              <li>
                <Link to="/">Workspace Name</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={5} lg={5} md={12} sm={12}>
            <Card>
              <Card.Header>
                <h3>Output</h3>
              </Card.Header>
              <Card.Body>
                <h3>Edit and Update the result</h3>
                <ListGroup>
                  <ListGroup.Item>Developed Apps Games Websites</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={7} lg={7} md={12} sm={12}>
            <Card>
              <Card.Header>
                <h3>Beautification Window</h3>
              </Card.Header>
              <Card.Body className="p-3">
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Begin Typing....</p>"
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
            <Button className="update">Update</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WorkspaceSwith;
