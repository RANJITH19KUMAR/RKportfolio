import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "/src/Compoents/css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <Container>

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <Row className="mt-5">

          {/* Contact Details */}

          <Col lg={5} className="mb-4">

            <Card className="contact-card">

              <Card.Body>

                <h3>Let's Connect</h3>

                <p>
                  I'm currently looking for Java Full Stack
                  Developer opportunities.
                </p>

                <div className="contact-item">
                  <FaEnvelope />
                  <span>ranjithdev320@gmail.com</span>
                </div>

                <div className="contact-item">
                  <FaPhone />
                  <span>+91 9788521639</span>
                </div>

                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>Ariyalur, Tamil Nadu</span>
                </div>

                <div className="social-links">

                  <a
                    href="https://github.com/RANJITH19KUMAR/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ranjith-kumar-b8b886309/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                </div>

              </Card.Body>

            </Card>

          </Col>

          {/* Contact Form */}

          <Col lg={7}>

            <Card className="contact-card">

              <Card.Body>

                <Form>

                  <Row>

                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className="mb-3"
                      />
                    </Col>

                    <Col md={6}>
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        className="mb-3"
                      />
                    </Col>

                  </Row>

                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="mb-3"
                  />

                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Your Message"
                    className="mb-4"
                  />

                  <Button className="send-btn">
                    Send Message
                  </Button>

                </Form>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>

    </section>
  );
};

export default Contact;