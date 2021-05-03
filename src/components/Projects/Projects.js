import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import toptech from "../../Assets/Projects/toptech.png";
import creativePlanet from "../../Assets/Projects/creativeplanet.png";
import trackWay from "../../Assets/Projects/trackway.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toptech}
              isBlog={false}
              title="Top-Tech"
              description="Toptech is a website for a tech IT company where a user can order for a service. Admin panel can see the orders in the admin dashboard. User can see their all order services and current status and also can write review about the service in the add review section. Admin can add a new service from the admin dashboard which will be visible in the home section dynamically."
              link="https://github.com/amirhamjashowrav/top-tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creativePlanet}
              isBlog={false}
              title="Creative-Planet"
              description="A full stack client website where user can buy any product. In admin panel admin can see all the registered products and can add product and also delete product."
              link="https://github.com/amirhamjashowrav/full-stack-creative-planet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trackWay}
              isBlog={false}
              title="TrackWay"
              description="A riding sharing app where user can choose a service. Then user can set pick up point and set a destination point."
              link="https://github.com/amirhamjashowrav/track-way-react-auth"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
