import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h3>Reach Out</h3>
            <hr />
            <p>Feel free to reach me out through:</p>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+254) 796 475 102
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    cmarutidev@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    clint maruti
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
