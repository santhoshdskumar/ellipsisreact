import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectCustom from '../components/ProjectsCustom';
import { projects } from './projects';
class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="workspace">
        <h1 className="headTitle">WorkSpace</h1>
        <Link to ="" className="addproject">Add Project</Link>
        <ProjectCustom projects={projects}></ProjectCustom>
        {}
      </div>
    );
  }
}

export default Workspace;
