import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Clima.Dev</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>              
              <Link to="/project">Projects</Link>                            
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Clima.Dev</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Main />
          <Content />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
