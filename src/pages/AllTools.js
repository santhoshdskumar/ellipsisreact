import React, { Component } from 'react';
import { Digital, Email, Linkedin, Event, Website, Writing, Article, ArticleGen } from './products';
import ToolkitCustom from '../components/ToolkitCustom';

export default class AllTools extends Component {
  render() {
    return (
      <section class="productList">
        <h1 className="headTitle">All Tools</h1>
        <div className="container">
          <div className="row ">
            <div className="col-12  mb-4">
              <h2>Digital Ads</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Digital} />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-12  mb-4">
              <h2>Articles</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Article} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  mb-4 mt-5">
              <h2>Emails</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Email} />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-12  mb-4">
              <h2>LinkedIn</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Linkedin} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  mb-4 mt-5">
              <h2>Website</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Website} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  mb-4 mt-5">
              <h2>Event Promotions </h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={Event} />
        </div>


      </section>
    );
  }
}


