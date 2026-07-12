import { Container, Row, Col, Card } from "react-bootstrap";
import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiBootstrap, SiHtml5,SiCss } from "react-icons/si";
import "/src/Compoents/css/About.css"

const About = () => {
  return (
    <section id="about" className="about-section">

      <Container>

        <h2 className="section-title text-center">
          About <span>Me</span>
        </h2>

        <Row className="mt-5 align-items-center">

          {/* Left Side */}

          <Col lg={7} data-aos="fade-right">

            <h3>Java Full Stack Developer</h3>

            <p className="about-text">
              I'm a passionate Java Full Stack Developer with
              hands-on experience in building responsive,
              scalable and user-friendly web applications using
              Java, Spring Boot, React.js, Bootstrap, MySQL,
              JavaScript and REST APIs.

              I enjoy solving real-world problems and creating
              modern applications with clean UI and efficient
              backend architecture.
            </p>

            <div className="skills-grid">

              <div className="skill-box">
                <FaJava />
                Java
              </div>

              <div className="skill-box">
                <SiSpringboot />
                Spring Boot
              </div>

              <div className="skill-box">
                <FaReact />
                React
              </div>

              <div className="skill-box">
                <FaDatabase />
                MySQL
              </div>

              <div className="skill-box">
                <SiBootstrap />
                Bootstrap
              </div>
               <div className="skill-box">
                <SiHtml5 />
                HTML
              </div>
               <div className="skill-box">
                <SiCss />
                CSS
              </div>

            </div>

          </Col>

          {/* Right Side */}

          <Col lg={5} data-aos="fade-left">

            <Card className="about-card mb-4">

              <Card.Body>

                <h4>Education</h4>

                <p>
                  Bachelor of Engineering
                  <br />
                  Computer Science & Engineering -2025
                </p>

              </Card.Body>

            </Card>
            <Card className="about-card">

              <Card.Body>

                <h4>+2</h4>

                <p>
                  Maths Biology
                  <br />
                 percentage - 86%
                </p>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default About;