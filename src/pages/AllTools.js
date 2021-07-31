import React, { Component } from 'react';
import { products } from './products';
import { toolkit } from './products';
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
          <ToolkitCustom className="row " toolkit={products} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12  mb-4 mt-5">
              <h2>Email Toolkit</h2>
            </div>
          </div>
          <ToolkitCustom className="row " toolkit={toolkit} />
        </div>
      </section>
    );
  }
}
