import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import image from "./photo4.png";
import "./index.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={image} alt="avatar" style={{ height: "400px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Clint Abraham Maruti</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Detailed-oriented, responsible and committed Software Engineer,
              with a get-it-done, on-time and high-quality product spirit, and a
              solid three years of experience defining requirements, designing,
              implementing, testing and delivering complex back-end and
              front-end and web applications using various programming languages
              and technologies. He is very creative hence uses his talent in
              giving a deep intuitive visual aspect to applications he develops.
              He is also an advocate for building open-source projects. Besides
              coding, Clint is adventurous and outgoing. He enjoys meeting new
              people and learning about new cultures. He is also a gamer, a
              strong lover of music and theater arts. He is a self-taught
              guitarist and to wrap it up a photographer.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Adress</h5>
            <p>Nairobi, Kenya</p>
            <h5>Phone</h5>
            <p>+254 796 475 102</p>
            <h5>Email</h5>
            <p>cmarutidev@gmail.com</p>
            <h5>Web</h5>
            <p>clima.dev</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2008}
              endYear={2011}
              schoolName="Nakuru High School"
              schoolDescription="Kenya Certificate Of Secondary Education A (plain)"
            />
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="Jomo Kenyatta University of Agriculture and Technology"
              schoolDescription="Bsc. Mathematics and Computer Science"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills />
            {/*  */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
