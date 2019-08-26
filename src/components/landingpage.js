import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import image from "./photo3.png";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", height: "100vh" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={image} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Software Developer</h1>
              <hr />
              <p>
                HTML/CSS | Javascript | React | React Redux | NodeJS | Express |
                Python | Django | Flask{" "}
              </p>
              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/ClintPy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* Free Code Camp */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
                {/* gmail */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-gmail-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
