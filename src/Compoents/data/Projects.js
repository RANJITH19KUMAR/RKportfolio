import fuel from "/src/assets/Ranjith_Pro.jpeg";
import ev from "/src/assets/Ranjith_Pro.jpeg";
import movie from "/src/assets/Ranjith_Pro.jpeg";

const projects = [

  {
    id: 1,
    title: "Village Care - Complaint System",
    image: fuel,
    description:
      "Full-stack complaint tracking app for villages, built with Java, JDBC, and MySQL, deployed on Railway.",
    tech: [
      "Html",
      "CSS",
      "JavaScript",
      "Java",
      "JDBC",
      "MySQL",
      "Railway"
    ],
    github: "https://github.com/RANJITH19KUMAR/Village-Care",
    live: "https://village-care-production.up.railway.app/",
  },

  {
    id: 2,
    title: "Fuel Delivery Management System",
    image: fuel,
    description:
      "Developed a responsive fuel delivery management application with fuel booking, order tracking, payment UI, delivery status, and an admin-style interface. Backend integration with Java Spring Boot and MySQL is planned.",
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/yourusername/fuel-delivery-management",
    live: "https://yourfuelbook.netlify.app/",
  },



  {
    id: 2,
    title: "Movie Management Platform",
    image: movie,
    description:
      "Built a movie streaming platform inspired by JioHotstar & Netflix with home page, movie categories, search, and responsive layouts. Frontend completed. Backend, user authentication, and database functionality will be added during the Java Full Stack phase.",
    tech: [
      "React",
      "Bootstrap",
      "CSS",
      "Git"
      
    ],
    github: "https://github.com/yourusername/movie-management",
    live: "https://gomovienew.netlify.app/",
  },
];


export default projects;