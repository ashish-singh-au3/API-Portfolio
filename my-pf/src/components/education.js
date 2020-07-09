import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default class education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
    };
  }
  //For fetching educational details: http://localhost:5000/education
  componentWillMount() {
    fetch("http://localhost:5000/education")
      .then((res) => res.json())
      .then((data) => this.setState({ education: data }));
  }

  render() {
    const educationItem = this.state.education.map((education) => (
      <div key="education">
        <p id="1">
          <hr />

          <th>
            <tr>
              {education.id}.{education.role}
            </tr>
            <tr>{education.college}</tr>
            <tr>{education.time}</tr>
            <tr>{education.description}</tr>
          </th>
        </p>
      </div>
    ));
    return (
      <div>
        <Jumbotron fluid className="">
          <Container className="">
            {" "}
            <h2 className="col-md-6">Education Details</h2>
            <br />
            <hr />
            {educationItem}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
