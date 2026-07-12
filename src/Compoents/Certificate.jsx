import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCertificate, FaAward } from "react-icons/fa";
import "/src/Compoents/css/Certificate.css";

const certifications = [
  {
    title: "Java Full Stack Development",
    provider: "Course / SLA",
    year: "2026",
    icon: <FaCertificate />,
  },
  {
    title: "Java ",
    provider: "Coursera / Amazon",
    year: "2026",
    icon: <FaCertificate />,
  },
  {
    title: "React JS Development",
    provider: "Course / SLA",
    year: "2026",
    icon: <FaCertificate />,
  },

  
  {
    title: "AWS Gen Ai",
    provider: "Course / AWS Training ",
    year: "2025",
    icon: <FaCertificate />,
  },
  {
    title: "Responsive Web Design",
    provider: "Internship / Code Bind Technology",
    year: "2023",
    icon: <FaAward />,
  },
];

const Certificate = () => {
  return (
    <section className="certification-section" id="certifications">
      <Container>

        <h2 className="section-title">
          Certifications <span>& Achievements</span>
        </h2>

        <Row className="g-4 mt-5">

          {certifications.map((item, index) => (
            <Col lg={6} key={index}>

              <Card className="certificate-card">

                <Card.Body>

                  <div className="certificate-icon">
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <h6>{item.provider}</h6>

                  <p>{item.year}</p>

                </Card.Body>

              </Card>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
};

export default Certificate;