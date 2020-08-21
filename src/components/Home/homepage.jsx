import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8}>
            {props.title && <h1>{props.title}</h1>}
            {props.subTitle && <h3>{props.subTitle}</h3>}
            {props.body && <h3>{props.body}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
export default Home;
