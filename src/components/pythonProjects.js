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
import kazi from "./prj5.png";

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
                Fast Food Fast API
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
                  <a href="https://github.com/ClintPy/Fast-Food-API">Github</a>
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
                  color: "#000",
                  height: "250px",
                  background: `url(${kazi}) center no-repeat #46B6AC`,
                  backgroundSize: "300px 200px"
                }}
              >
                KaziLink Job Website
              </CardTitle>
              <CardText>
                <b>Kazilink</b> is a leading Tanzania's job website. First of its kind
                in East Africa, it offers SMS Job Alerts to Job Seekers through
                paid subscriptions. <b>Developed using:-</b>
                <ul>
                  <li>Python</li>
                  <li>Django Framework</li>
                  <li>PostgreSQL</li>
                  <li>Twilio Python API</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>User Signup | Login</li>
                  <li>Job Search</li>
                  <li>SMS Notifications</li>
                  <li>Clean Materialize UI</li>
                </ul>
                <p>Client: <i>Christine Zanzi</i></p>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="http://www.kazilink.co.tz/" target="blank">Demo</a>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </Grid>
    );
  }
}

export default PythonProject;
