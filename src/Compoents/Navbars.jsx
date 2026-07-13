import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

import "/src/Compoents/css/Navbar.css";

function Navbars({ darkMode, toggleTheme }) {

  return (

    <Navbar expand="lg" fixed="top" className="custom-nav m-3">

      <Container>

        <Navbar.Brand href="#home">
          <span className="logo">RK Portfolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>

          <Button
            className="theme-btn ms-lg-3 mt-3 mt-lg-0"
            onClick={toggleTheme}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}

export default Navbars;