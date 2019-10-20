import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Blog from "./blog";
import Project from "./projects";
import Resume from "./resume";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/project" component={Project} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
}
