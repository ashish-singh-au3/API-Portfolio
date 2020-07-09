import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: [],
    };
  }
  componentWillMount() {
    fetch("http://localhost:5000/work")
      .then((res) => res.json())
      .then((data) => this.setState({ work: data }));
  }

  render() {
    const workItem = this.state.work.map((work) => (
      <div key="work">
        <p id="1">
          <hr />

          <th>
            <tr>
              {work.id}.{work.role}
            </tr>
            <tr>{work.company}</tr>
            <tr>{work.time}</tr>
            <tr>{work.description}</tr>
          </th>
        </p>
      </div>
    ));
    return (
      <div>
        <Jumbotron fluid className="">
          <Container className="">
            {" "}
            <h2 className="col-md-6">Work Experience</h2>
            <br />
            <hr />
            {workItem}
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
