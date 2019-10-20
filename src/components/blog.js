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

const Title = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

`

class Blog extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12} className="center-it">
          <Title>Blog</Title>
        </Cell>
        <Cell col={6}>
          <Card shadow={0} style={{ width: "512px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-5.jpg) center / cover"
              }}
            >
            Simple Firebase Image Uploader/Display with ReactJs
            </CardTitle>
            <CardText className="cardDetails">
            As a newbie in react, I spent a chunk of time looking for a simple and well elaborated tutorial on uploading an image to firebase. 
            </CardText>
            <CardActions border>
              <Button colored>Read More</Button>
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
                  "url(https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-5.jpg) center / cover"
              }}
            >
              Redux - as Simple as it can get
            </CardTitle>
            <CardText className="cardDetails">
            Redux, by it's definition, is a state management framework that can be used with different web technologies, including react and ruby. Redux is not part of react!
            </CardText>
            <CardActions border>
              <Button colored>Read More</Button>
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
