import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardActions,
  CardMenu,
  CardTitle,
  Button,
  IconButton
} from "react-mdl";
import styled from "styled-components";
import "./index.css";

import img_1 from "./card.png";

const Title = styled.p`
  font-size: 1.5rem;
  text-align: left;
`;

class Blog extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6}>
          <Card shadow={0} style={{ width: "512px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(img_1) center / cover"
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
        <Cell col={6}>
          <Card shadow={0} style={{ width: "512px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              Welcome
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>
    );
  }
}

export default Blog;
