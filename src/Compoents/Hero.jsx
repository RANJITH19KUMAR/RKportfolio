import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import "./Hero.css";
import profile from "/src/assets/Ranjith_Pro.jpeg";

const Hero = () => {
  return (
    <section className="hero-section mt-3" id="home">
      <Container>
        <Row className="align-items-center">

          {/* Left Content */}
          <Col
            lg={7}
            md={12}
            className="text-center text-lg-start order-2 order-lg-1"
          >
            <h5 className="hello">Hello, I'm</h5>

            <h1 className="name">Ranjith Kumar</h1>

            <h2 className="role py-3">
              Java Full Stack Developer
            </h2>

            <p className="description ">
              Passionate Java Full Stack Developer specializing
              in Java, Spring Boot, React.js, Bootstrap,
              JavaScript, SQL and REST APIs. I enjoy building
              scalable web applications with clean UI and
              efficient backend architecture.
            </p>

            <Button className="hero-btn me-3">
              Hire Me
            </Button>

            <Button variant="outline-info">
              Download Resume
            </Button>

            <div className="social-icons mt-4">
              <a
    href="https://github.com/RANJITH19KUMAR/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  <a
    href=" https://www.linkedin.com/in/ranjith-kumar-b8b886309/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
              <FaLinkedin />
              </a>

              <a
    href=" https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >       
              <FaInstagram />
              </a>
                          <a
    href=" https://leetcode.com/u/RANJITH19K/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Leetcode"
  >  
              <SiLeetcode/>
              </a>
            </div>
          </Col>


          {/* Right Image */}
          <Col
            lg={5}
            md={12}
            className="text-center order-1 order-lg-2 mb-5 mb-lg-0"
          >
            <img
              src={profile}
              alt="Profile"
              className="profile-image"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;