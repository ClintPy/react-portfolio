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
import project6 from "./prj6.png";
import project7 from "./prj7.png";
import project8 from "./prj8.jpg";

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
                  background: `url(${project6}) center no-repeat #46B6AC`,
                  backgroundSize: "300px 230px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>Travel Bay UI/UX</h5>
                <hr />
                <b>Travel Bay</b> is a SPA template for finding out best travel
                destinations.
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>HTML5 | CSS3</li>
                  <li>Sass</li>
                  <li>JQuery</li>
                  <li>FontAwesome Fonts</li>
                  <li>Materialize UI</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Active Search Bar</li>
                  <li>Image Slider</li>
                  <li>Image Gallery</li>
                  <li>Social Media Links</li>
                  <li>Contact Forms</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://relaxed-hopper-575e80.netlify.com/">Demo</a>
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
                  background: `url(${project7}) center no-repeat #46B6AC`,
                  backgroundSize: "280px 220px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>Fast Food Fast App</h5>
                <hr />A <b>Fast Food Online Order</b> platform. This was a
                project challenge by Andela.
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>HTML | CSS</li>
                  <li>Javascript</li>
                  <li>Vanilla Js</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Admin Panel</li>
                  <li>User Login | Signup</li>
                  <li>Order Cart</li>
                  <li>Order History</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Fast-Food-Fast">Github</a>
                </Button>
                <Button colored>
                  <a href="https://clintpy.github.io/Fast-Food-Fast/">Demo</a>
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
                  background: `url(${project8}) center no-repeat #46B6AC`,
                  backgroundSize: "280px 200px"
                }}
              ></CardTitle>
              <CardText>
                <h5 style={{ fontWeight: "bold" }}>Kava Africa Mobile App</h5>
                <hr />
                <b>Kava</b> is a <b>Money Management</b> and <b>Lending</b>{" "}
                Platform for Consumers and Traders.
                <br />
                <br />
                <b>Tools Used:-</b>
                <ul>
                  <li>Material UI</li>
                  <li>Sketch</li>
                  <li>Proto.io</li>
                  <li>Adobe Experince Design (XD)</li>
                </ul>
                <b>Key Features:-</b>
                <ul>
                  <li>Sign Up | Login</li>
                  <li>Fluid UX</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://play.google.com/store/apps/details?id=com.v2.zeepo.kava&hl=en">
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
