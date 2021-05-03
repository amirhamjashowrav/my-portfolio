import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import BlogCard from "../components/Projects/BlogsCards";
import Particle from "./Particle";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import algo from "../Assets/Projects/algo.png";
//import plant from "../Assets/Projects/plant.jpeg";


function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <h1 className="project-heading">
           <strong className="purple">Coming Soon </strong> 
        </h1>
        {/* <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Blogs;
