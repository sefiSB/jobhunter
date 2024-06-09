import "../../styles/myStyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function JobNav({ user }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Főoldal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
                Profilom
            </Nav.Link>
            <Nav.Link href="">Bejelentkezés</Nav.Link>
            <Nav.Link href="">Regisztráció</Nav.Link>
            <Nav.Link href="">Kijelentkezés</Nav.Link>
            <Nav.Link href="">Álláshirdetés hozzáadása</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default JobNav;
