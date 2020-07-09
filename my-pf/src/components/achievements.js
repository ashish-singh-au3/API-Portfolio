import React, { Component } from "react";

export default class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: [],
    };
  }

  //Fetching the data using API http://localhost:5000/achievements.
  componentWillMount() {
    fetch("http://localhost:5000/achievements")
      .then((res) => res.json())
      .then((data) => this.setState({ achievements: data }));
  }

  render() {
    const achievementItem = this.state.achievements.map((achievements) => (
      <div key="achievements" className="wrapper">
        <p>
          <th>
            <tr>
              {achievements.id} {achievements.name}
            </tr>
            <tr>{achievements.authorisation}</tr>
            <tr>{achievements.expiry}</tr>
          </th>
        </p>
      </div>
    ));
    return (
      <div className="form-wrapper col-sm-12 ">
        {" "}
        <h2 className="col-md-3">Achievements</h2>
        <hr />
        <br />
        {achievementItem}
      </div>
    );
  }
}
