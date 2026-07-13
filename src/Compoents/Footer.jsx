import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "/src/Compoents/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <Container>

        <Row className="gy-4">

          {/* Left */}

          <Col lg={5}>

            <h2 className="footer-logo">
              Ranjith<span> Kumar</span>
            </h2>

            <h5>Java Full Stack Developer</h5>

            <p>
              Passionate Java Full Stack Developer building
              responsive, scalable and user-friendly web
              applications using Java, Spring Boot, React,
              Bootstrap and MySQL.
            </p>

          </Col>

          {/* Quick Links */}

          <Col lg={3}>

            <h4>Quick Links</h4>

            <ul className="footer-links">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </Col>

          {/* Social */}

          <Col lg={4}>

            <h4>Connect</h4>

            <div className="footer-social">

              <a
                href="https://github.com/RANJITH19KUMAR/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href=" https://www.linkedin.com/in/ranjith-kumar-b8b886309/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/RANJITH19K/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode />
              </a>

              <a href="mailto:ranjithdev320@gmail.com">
                <FaEnvelope />
              </a>

            </div>

          </Col>

        </Row>

        <hr />

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Ranjith Kumar.
            All Rights Reserved.
          </p>

          <a href="#home" className="top-btn">
            <FaArrowUp />
          </a>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;