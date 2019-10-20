import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 2rem;
`;
const ListItem = styled.li`
  color: white;
`;
const Subtitle = styled.p`
  font-size: 1.5rem;
`;

class Experience extends Component {
  render() {
    return (
      <div style={{ color: "#ffffff" }}>
        <Grid>
          <Cell col={4}>
            <p>2018 ~ 2019</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>Andela</h4>
            <Subtitle>Full Stack Developer</Subtitle>
            <p>Backend:-</p>
            <List>
              <ListItem>
                Design and Development of backend API using python’s Flask &
                Django Frameworks and Javascript's Node.js & Express.js
              </ListItem>
              <ListItem>API Testing using Pytest, Unittest & Jest</ListItem>
              <ListItem>Databases: Postgres and MongoDB</ListItem>
              <ListItem>API documentation using swagger</ListItem>
            </List>
            <p>Frontend:-</p>
            <List>
              <ListItem>
                Design and implementation of UI using React & Redux(State
                Management)
              </ListItem>
            </List>
          </Cell>
        </Grid>
        {/* Second Experience */}
        <Grid>
          <Cell col={4}>
            <p>2017 ~ 2018</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>Kreative Reinaissance</h4>
            <Subtitle>Software Developer Lead</Subtitle>
            <p>Developed Progressive Web Apps (PWA)</p>
            <p>Language:</p>
            <List>
              <ListItem>Python - Django</ListItem>
              <ListItem>PHP - Laravel, CodeIgniter, Wordpress</ListItem>
              <ListItem>Javascript - Vanilla JS</ListItem>
            </List>
            <p>Database:</p>
            <List>
              <ListItem>MySQL, PostgreSQL</ListItem>
            </List>
          </Cell>
        </Grid>
        {/* Third Experience */}
        <Grid>
          <Cell col={4}>
            <p>2015 ~ 2017</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{ marginTop: "0px" }}>Letrads Consultants</h4>
            <Subtitle>Web Developer & Author</Subtitle>
            <List>
              <ListItem>
                Web Developer (php, html, css) and Administration
              </ListItem>
              <ListItem>
                Wrote different articles on ways to enhance cognitive and talent
                development in Youths
              </ListItem>
              <ListItem>
                Involved in decision making on various activities aimed at
                improving proactiveness among youth.
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
