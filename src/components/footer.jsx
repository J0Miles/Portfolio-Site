import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid>
        <Row className="border-top justify-content-center p-2">
          <div className="">This site was made by Jordan Miles</div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
