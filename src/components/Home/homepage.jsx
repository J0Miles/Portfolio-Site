import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";

import HeroPage from "./heroPage";

function Home(props) {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <HeroPage />
      <div data-aos="fade-left" className="content">
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={8}>
                {props.title && (
                  <h1 className="display-1 font-weight-bolder">
                    {props.title}
                  </h1>
                )}
                {props.subTitle && (
                  <h3 className="display-4 font-weight-light">
                    {props.subTitle}
                  </h3>
                )}
                {props.body && <h3>{props.body}</h3>}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </React.Fragment>
  );
}
export default Home;
