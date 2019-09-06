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
       <ReactProjects />
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
