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

class ExpressProject extends Component {
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
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Web Token Authentication</li>
                  <li>CRUD Endpoints for both User/ Orders </li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Fast-Food-Fast-Nodejs">
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

          {/* Project 2 */}
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
                A Node Js API Authentication with JWT
              </CardTitle>
              <CardText>
                Node.js api that is going to handle Authentication for us in any
                application we want to use it in.
                <ul>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>JWT Authentication</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Web Token Authentication</li>
                  <li>User SignIn and SignUp</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Node.js-API-Authentication-with-JWT">
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

          {/* Project 3 */}
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
                Swahili Foods App API
              </CardTitle>
              <CardText>
                <b>Swahili Foods</b> is a recipe App, which sits on Node Express
                backend Developed using:
                <ul>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Web Token Authentication</li>
                  <li>CRUD Endpoints</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Swahili-Foods-App-Api">
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

export default ExpressProject;
