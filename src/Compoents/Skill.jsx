import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiBootstrap,
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiGithub,
  
} from "react-icons/si";

import "/src/Compoents/css/Skill.css";

const Skill = () => {
  return (
    <section className="skills-section" id="skills">

      <Container>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <Row className="g-4 mt-4">

          <Col lg={3} md={6}>
            <Card className="skill-card">
              <Card.Body>
                <h4>Frontend</h4>

                <div className="skill-item"><FaReact /> React.js</div>
                <div className="skill-item"><SiBootstrap /> Bootstrap</div>
                <div className="skill-item"><FaHtml5 /> HTML5</div>
                <div className="skill-item"><FaCss3Alt /> CSS3</div>
                <div className="skill-item"><SiJavascript /> JavaScript</div>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="skill-card">
              <Card.Body>

                <h4>Backend</h4>

                <div className="skill-item"><FaJava /> Java</div>
                <div className="skill-item"><SiSpringboot /> Spring Boot</div>
                <div className="skill-item">REST API</div>
                <div className="skill-item">Hibernate</div>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="skill-card">
              <Card.Body>

                <h4>Database</h4>

                <div className="skill-item"><SiMysql /> MySQL</div>
                <div className="skill-item">SQL</div>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6}>
            <Card className="skill-card">
              <Card.Body>

                <h4>Tools</h4>

                <div className="skill-item"><FaGitAlt /> Git</div>
                <div className="skill-item"><SiGithub /> GitHub</div>
                {/* <div className="skill-item"><SiVisualstudiocode /> VS Code</div> */}
                <div className="skill-item"><SiPostman /> Postman</div>

              </Card.Body>
            </Card>
          </Col>
           <Col lg={3} md={6}>
            <Card className="skill-card">
              <Card.Body>

                <h4>GenAI Tools</h4>

                <div className="skill-item">🤖 ChatGPT</div>
      <div className="skill-item">⚡ GitHub Copilot</div>
      <div className="skill-item">✨ Google Gemini</div>
      <div className="skill-item">🧠 Claude AI</div>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default Skill;