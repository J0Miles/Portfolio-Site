import React from "react";
import Hero from "../Home/heroPage";
import Content from "../content";

function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>Hello</Content>
      {/* TODO: Write out body paragraph */}
    </div>
  );
}
export default About;
