import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Home/homepage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Jordan Miles",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Modern Web Design & Development",
        subTitle: "UI/UX Focused",
        body: ""
      },
      about: {
        title: "About Me",
        subTitle: "",
        body: ""
      },
      contact: {
        title: "Contact Me"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar>
            <Navbar.Brand>Jordan Miles</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
