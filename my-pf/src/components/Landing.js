import React, { Component } from "react";
import { Grid } from "react-mdl";
import img from "../new.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="new" className="new-png" />
        <div style={{ margin: "center" }}>
          <Grid className="landing-grid">
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                HTML/CSS | JavaScript | React-Redux | NodeJS | Express | MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ashish-chauhan-a86287170/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/ashish-singh-au3?tab=repositories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
