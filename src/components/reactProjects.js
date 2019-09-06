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

class ReactProject extends Component {
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
                  background:
                    "url(https://github.com/ClintPy/mpango-app-react-redux-firebase/blob/master/mpango.png?raw=true) center no-repeat #46B6AC",
                  backgroundSize: "300px 290px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>Mpango (Plan) App</h5>
                <hr />
                <b>Mpango App</b> is a project planner web application that lets
                users sign up and set their set plans.
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>React | Redux</li>
                  <li>Firebase | Firestore</li>
                  <li>Firebase Authentications</li>
                  <li>Firebase Cloud Functions</li>
                  <li>React Thunk</li>
                  <li>React Router</li>
                  <li>Materialize CSS UI</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Sign In | Sign Up</li>
                  <li>Notifications Tab</li>
                  <li>Admin Dashboard</li>
                  <li>Post Project Feature</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Fast-Food-API">Github</a>
                </Button>
                <Button colored>
                  <a href="https://relaxed-boyd-b5aed2.netlify.com">Demo</a>
                </Button>
              </CardActions>
            </Card>
          </div>
          {/* Project 2 */}
          <div>
            <Card shadow={0} style={{ width: "315px", margin: "auto" }}>
              <CardTitle
                expand
                style={{
                  color: "#000",
                  height: "250px",
                  background:
                    "url(https://combo.staticflickr.com/pw/images/windows_uploadr@2x.png) center no-repeat #46B6AC",
                  backgroundSize: "350px 300px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>Firebase Image Uploader</h5>
                <hr />A <b>React Firebase</b> image Uploader Boiler Plate.
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>Create-React-App CLI</li>
                  <li>Firebase</li>
                  <li>Firebase Storage</li>
                  <li>Materialize CSS UI</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Image Uploader</li>
                  <li>Image Display</li>
                  <li>Progress Bar</li>
                  <li>Clean UI</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Image-Uploader-React-Firebase">
                    Github
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
          {/* Project 3 */}
          <div>
            <Card shadow={0} style={{ width: "315px", margin: "auto" }}>
              <CardTitle
                expand
                style={{
                  color: "#000",
                  height: "250px",
                  background:
                    "url(https://github.com/ClintPy/React-Ultimate/blob/master/Webp.net-resizeimage.png?raw=true) center no-repeat #46B6AC",
                  backgroundSize: "300px 200px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>
                  React Authentication, Authorizations and Sessions Boiler Plate
                </h5>
                <hr />A <b>Complete React Project</b> with authentications and
                Sessions
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>Create-React-App CLI</li>
                  <li>React Router v4</li>
                  <li>Firebase</li>
                  <li>Axios</li>
                  <li>Recompose</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Sign Up | Login</li>
                  <li>Firebase Authentication</li>
                  <li>Sessions</li>
                  <li>React Spinners</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/React-Ultimate">Github</a>
                </Button>
                <Button colored>
                  <a href="https://suspicious-kepler-51457c.netlify.com/">
                    Demo
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

export default ReactProject;
