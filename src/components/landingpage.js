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
                Python | Django | Flask
              </p>
              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="http://linkedin.com/in/clint-maruti"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/ClintPy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/climaTellem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>
                {/* Free Code Camp */}
                <a
                  href="https://dev.to/clintpy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-dev" aria-hidden="true" />
                </a>
                {/* gmail */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-envelope-square" aria-hidden="true" />
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
