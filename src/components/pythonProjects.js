import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";
import apiIcon from "./api.png";

class PythonProject extends Component {
  render() {
    return (
      <Grid>
        {/* Project 1 */}
        <div className="project-express">
          <div>
            <Card shadow={0} style={{ width: "320px", margin: "auto" }}>
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  height: "250px",
                  background: `url(${apiIcon}) center no-repeat #46B6AC`,
                  backgroundSize: "200px 200px"
                }}
              >
                Fast-Food-Fast-API
              </CardTitle>
              <CardText>
                <b>Fast Food Fast</b> is an online food delivery service API.
                Developed using:
                <ul>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>PostgreSQL</li>
                  <li>Heroku</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Web Token Authentication</li>
                  <li>CRUD Endpoints for both User/ Orders </li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Fast-Food-API">
                    Github
                  </a>
                </Button>
              </CardActions>
            </Card>
            <Cell col={8}>
              <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
              <p>{this.props.jobDescription}</p>
            </Cell>
          </div>
        </div>
      </Grid>
    );
  }
}

export default PythonProject;
