import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Bishan Webeshete</strong>
              </h1>

              <p className="heading-description blockquote">
                I'm a software engineer. I enjoy the process of bringing my code
                to life and watching friends and family make use of my apps. As
                the tech world is continues to evolve, I am constantly looking
                for new technologies and methods to learn, as well as like
                minded people to collaborate with. Outside of coding, I love
                surfing and playing hockey.
              </p>

              {/* <div className="heading-type">
                <TypeWriter />
              </div> */}
            </Col>

            {/* <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              {/* <SocialMedia /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
