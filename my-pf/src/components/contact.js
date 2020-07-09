import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"; //I am using axios to post the data

//import Background from "../new1.png";

export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      comment: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:5000/contact", this.state).then((response) => {
      console.log(response);
    });
  };
  render() {
    const { userName, email, comment } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper col-md-3 offset-md-4">
          <Form onSubmit={this.submitHandler}>
            <Form.Group>
              <Form.Label htmlFor="userName">Name</Form.Label>
              <Form.Control
                id="userName"
                name="userName"
                as="textarea"
                rows="3"
                value={userName}
                onChange={this.changeHandler}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                as="textarea"
                rows="3"
                value={email}
                onChange={this.changeHandler}
                placeholder="Enter your email"
                isrequired
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="comment">Comment</Form.Label>
              <Form.Control
                id="comment"
                name="comment"
                as="textarea"
                rows="3"
                value={comment}
                onChange={this.changeHandler}
                placeholder="Please drop your comment here..."
              />
            </Form.Group>
            <Button className="d-inline-block" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
