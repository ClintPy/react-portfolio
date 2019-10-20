import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 2rem;
`;
const ListItem = styled.li`
  color: white;
`;

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <List>
            <ListItem>
              Python: Flask | Django | NumPy | Web Scrapping - Beautiful Soup
            </ListItem>
            <ListItem>
              Javascript: Node | Express | React | React-Redux | React-Native
            </ListItem>
            <ListItem>Database: MongoDB | MySQL | PostgreSQL</ListItem>
            <ListItem>
              DevOps: Docker, Jenkis, Vagrant, Puppetlabs, Kubernetes
            </ListItem>
            <ListItem>
              Agile Methodology: Atlassian tools - (Bitbucket, Confluence, Jira
              Software, Trello), Git, Pivotal Tracker
            </ListItem>
          </List>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
