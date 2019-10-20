import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import "./index.css";
import ExpressProject from "./expressProjects";
import PythonProject from "./pythonProjects";
import ReactProjects from "./reactProjects";
import UiProjects from "./uiProjects";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <ReactProjects />;
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <ExpressProject />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <PythonProject />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <UiProjects />
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
          <Tab>UI/UX</Tab>
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
