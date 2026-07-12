import { Container } from "react-bootstrap";
import "./css/Experience.css";

const experienceData = [
  {
    year: "2026 - Present",
    title: "Java Full Stack Developer Training - SLA Institute",
    subtitle: "Learning Journey",
    description:
      "Learning Java, Spring Boot, Spring MVC, Hibernate, MySQL, REST APIs, React.js, Git, and deployment to build full-stack applications."
  },
  {
    year: "2025",
    title: "Frontend Project Development",
    subtitle: "Personal Projects",
    description:
      "Developed Fuel Delivery Management, EV Charging Finder & Booking, and Movie Management applications using React, Bootstrap, JavaScript, HTML, and CSS."
  },
  {
    year: "2023",
    title: "Web Development Training",
    subtitle: "Internship - Code Bind Technology",
    description:
      "Learning and develop by web application in this training period. Using techology for JavaScript, HTML, and CSS."
  },
  {
    year: "2021 - 2025",
    title: "Bachelor of Engineering",
    subtitle: "Computer Science & Engineering",
    description:
      "Studied programming, databases, networking, operating systems, software engineering, and web development."
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <Container>

        <h2 className="section-title">
          Experience <span>& Education</span>
        </h2>

        <div className="timeline">

          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h4>{item.title}</h4>

                <h6>{item.subtitle}</h6>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Experience;