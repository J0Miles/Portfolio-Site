import React from "react";
import Hero from "../Home/heroPage";
import Content from "../content";

function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p id="body">
          Hello my name is Jordan Miles. I'm a full stack engineer with
          experience with React, Angular, Express JS, Node.js, SQL, MySQL,
          MongoDB, and Python.
        </p>
        <p id="body">
          My dream is to do freelance development as an entrepreneur.
        </p>
        <p id="body">
          I am always trying to learn new things, currently those things include
          deep learning utilizing Python, WordPress, Azure, and Vue js.
        </p>
        <p id="body">
          I have worked as both a full stack and front end developer in diverse
          work enviroments. I enjoy building responsive UI's and redefining the
          User Experience. When I'm not working chances are I am working on a
          side project. You can find those on my github profile from the
          homepage or&nbsp;
          <a href="https://github.com/J0Miles" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </Content>
    </div>
  );
}
export default About;
