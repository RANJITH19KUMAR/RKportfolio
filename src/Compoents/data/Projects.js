import fuel from "/src/assets/Ranjith_Pro.jpeg";
import ev from "/src/assets/Ranjith_Pro.jpeg";
import movie from "/src/assets/Ranjith_Pro.jpeg";

const projects = [
  {
    id: 1,
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
    title: "EV Charging Finder & Booking",
    image: ev,
    description:
      "Designed a modern EV charging station finder with station listing, booking interface, charging slot selection, pricing, and responsive UI. Frontend completed using React. ",
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "Responsive Design"
    ],
    github: "https://github.com/yourusername/ev-charging-booking",
    live: "#",
  },

  {
    id: 3,
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