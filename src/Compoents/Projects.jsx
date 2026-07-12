import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "/src/Compoents/data/Projects.js";
import "./css/Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <Row className="g-4 mt-4">

          {projects.map((project) => (
            <Col lg={4} md={6} key={project.id}>

              <Card className="project-card h-100">

                {/* <Card.Img
                  variant="top"
                  src={project.image}
                  className="project-img"
                /> */}

                <Card.Body>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-buttons mt-4">

                    <Button
                      href={project.github}
                      target="_blank"
                      className="github-btn"
                    >
                      <FaGithub /> GitHub
                    </Button>

                    <Button
                      href={project.live}
                      target="_blank"
                      variant="outline-info"
                    >
                      <FaExternalLinkAlt /> Live
                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
};

export default Projects;