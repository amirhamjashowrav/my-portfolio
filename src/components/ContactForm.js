import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import Particle from "./Particle";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_c9y6f02', e.target, 'user_i9rWFAtLwQvUwZWyoeJIM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <Container fluid  className="contact-container ">
      <Particle />
      <Container className="mt-5 pt-5">
        <h3 className="text-center text-white mb-3">GET IN TOUCH</h3>
        <Row>
          <Col md={5}>
            <p className="lead text-center text-white mt-5">
              Feel free to get in touch with me. I am always open to discussing new
              projects, creative ideas or opportunities to be part of your visions.
            </p>
          </Col>
          <Col md={7}>
            <h4 className=" text-white pb-3 pt-5 pt-md-0">Message Me</h4>
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <br />
              <input
                className="form-control form-control-lg"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <br />
              <textarea
                className="form-control form-control-lg"
                placeholder="Message"
                rows="4"
                name="message"
                required
              ></textarea>
              <br />
              <Button variant="primary" type="submit" value="Send">SEND MESSAGE</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactForm;