import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import "./index.css";
import ExpressProject from "./expressProjects";
import PythonProject from "./pythonProjects";
import ReactProjects from "./reactProjects";

import background from "./prj1.png";
import background2 from "./prj2.png";
import background3 from "./prj3.png";
import background4 from "./prj4.png";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid ">
          <div>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "215px",
                  background: `url(${background}) center / cover`
                }}
              >
                Mpango App
              </CardTitle>
              <CardText>
                <b>Mpango App</b> is a project planner web application that lets
                users sign up and set there plans. <b>Key features include:-</b>
                <ul>
                  <li>React Redux</li>
                  <li>Firebase/ Firestore realtime database Integration</li>
                  <li>Authentications</li>
                  <li>Material CSS UI Integration</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/mpango-app-react-redux-firebase">
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href="https://relaxed-boyd-b5aed2.netlify.com/">
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "black",
                  height: "215px",
                  background: `url(${background2}) center / cover`
                }}
              >
                React Image Uploader Boiler Plate
              </CardTitle>
              <CardText>
                This is a{" "}
                <b>
                  React Firebase Image Uploader Boiler Plate
                  <br />
                  Tools
                </b>
                <ul>
                  <li>Create-React-App CLI</li>
                  <li>Material CSS UI</li>
                  <li>Firebase</li>
                  <li>Firebase Storage</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/Image-Uploader-React-Firebase">
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href="https://github.com/ClintPy/Image-Uploader-React-Firebase">
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "215px",
                  background: `url(${background3}) center / cover`
                }}
              >
                Github Profile Finder
              </CardTitle>
              <CardText>
                A Github profile finder App that utilizes Github API to fetch:
                <ul>
                  <li>A user's Github name</li>
                  <li>Total number of repositories</li>
                  <li>User's Bio</li>
                  <li>User's profile URL</li>
                </ul>
                it utilizes Vanilla js
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/github-profile-search">
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href="https://dazzling-kilby-170b89.netlify.com/">
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
          <div>
            {/* Project 3 */}
            <br />
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "215px",
                  background: `url(${background4}) center / cover`
                }}
              >
                Weather App
              </CardTitle>
              <CardText>
                Progressive <b>Javascript Weather App</b> Tools used:
                <ul>
                  <li>Vanilla Js</li>
                  <li>Weather API</li>
                </ul>
              </CardText>
              <CardActions border>
                <Button colored>
                  <a href="https://github.com/ClintPy/github-profile-search">
                    Github
                  </a>
                </Button>
                <Button colored>
                  <a href="https://pedantic-bartik-0f9302.netlify.com/">
                    Live Demo
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <ExpressProject />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <PythonProject/>
        </div>
      );
    } 
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Express</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
