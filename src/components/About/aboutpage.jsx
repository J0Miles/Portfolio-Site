import React from "react";
import Hero from "../Home/heroPage";
import Content from "../content";
import BarChart from "./chart.jsx";

function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p id="body">
          Hello, my name is Jordan Miles, a Full-Stack Developer with experience
          in an extensive range of programming languages.
        </p>
        <p id="body">
          Over the last few years, I’ve spent my time learning and keeping up
          with innovative trends in the world of tech. I have a huge interest in
          how technology can solve real-world problems and bring about progress.
          This is evident in my diligent pursuit of knowledge and expertise.
        </p>
        <p id="body">
          At the moment, I am exploring the field of deep learning utilizing
          Python, e-commerce with WordPress, cloud computing with Azure, and
          different Javacript frameworks with Vue JS. It is vital to add that
          what I do does not stop at acquiring skills. I am passionate about
          using my technical ability to provide professional full-stack
          development services to business owners and organizations.
        </p>
        <p id="body">
          I have experience in diverse work environments, working as a
          full-stack and front-end developer. I find building responsive UIs and
          refining the User Experience interesting. It is often the case that I
          am working on a side project when I am not pouring time and effort
          into completing a gig.
        </p>
        <p id="body">Listed below are some of the areas I have experience in: </p>
        <BarChart />
        <br />
        <p id="body">
          If you are looking to hire a professional and goal-driven full-stack
          developer to build your business website or software, I’m your person.
          I will work with you to bring your vision to life. Would you like to
          see some of the projects I’ve completed? You can find those on my
          GitHub profile&nbsp;
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
