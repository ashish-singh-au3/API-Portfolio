import React, { Component } from "react";

import "./Home.css";
import Achievements from "./achievements"; //Rendering achievements component here to display both in same page.

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  //Fetching the data using API http://localhost:5000/details.
  componentWillMount() {
    fetch("http://localhost:5000/details")
      .then((res) => res.json())
      .then((data) => this.setState({ details: data }));
  }

  render() {
    const detailItem = this.state.details.map((details) => (
      <div key="details" className="wrapper">
        <p>
          <th>
            <tr>{details.about1}</tr>
            <tr>{details.about2}</tr>
            <tr>{details.about3}</tr>
          </th>
        </p>
      </div>
    ));
    return (
      <div>
        <div className="form-wrapper col-sm-12 ">
          {" "}
          <h2 className="col-md-3">About me</h2>
          <hr />
          <br />
          {detailItem}
        </div>

        <Achievements />
      </div>
    );
  }
}
