import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Эльдар Зайнашев</Navbar.Brand>
            <Nav className="me-auto" style={{ float: "right" }}>
              <Nav.Link href="/home">HOME</Nav.Link>
              <Nav.Link href="/lessons">LESSONS</Nav.Link>
              <Nav.Link href="https://github.com/aeoloth">Github</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
