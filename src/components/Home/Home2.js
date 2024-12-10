import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/profile-image.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-start"> 
          {/* Image Column (1/3 width) */}
          <Col
            md={4}
            className="profile-image"
            style={{
              paddingBottom: 20,
              paddingLeft: "30px",
              paddingTop: "20px", 
              display: "flex",  
              flexDirection: "column", // Stack image and text vertically
              alignItems: "center",  // Center content horizontally
            }}
          >
            {/* Image */}
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid profile-img"
              
            />
            
            {/* Name and Job Role under the Image */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h3 style={{ color: "#283461" }}>Edmond Agbovi-Teye</h3>
              <p style={{ fontSize: "1.2em", fontWeight: "600", color: "#555" }}>
                Software Developer
              </p>

              <p style={{ fontSize: "1.5em", fontWeight: "700", color: "#0f5291" }}>
                {/* Read about code.whyCode() */}
              </p>

              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Edkofifi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edmond-teye/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            </div>
          </Col>



          {/* Text Column (2/3 width) */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">Edmond Agbovi-Teye</span>
            </h1>
            
            <p className="home-about-body">
              I am a software developer working currently on contract basis as a back-end(er) 
              on a custom application that facilitate export and import
              declarations to the UK's HMRC. This is a role that involves designing database, 
              developing APIs, and working with the HMRC APIs to transmit declaration data to external systems.
            </p>

            <p className="home-about-body">
              Prior to that, I worked as an inspector on a large language model (LLM)
               dataset construction project, primarily consisting of Python codes. I implemented data 
               quality principles to ensure that the data used to refine the model's 
               responses was both high-quality and conversational. I contributed directly to over
               1,000 human responses. Additionally, I have experience working as a K-12 
               instructor. During this time, I also worked as a part-time school administrator.
            </p>

            <p className="home-about-body">
              I completed my undergraduate studies in computer science at the University of Ghana (UG) in
               September, 2023. In my final year, I collaborated with a PhD student, which culminated 
               in my final-year thesis. Additionally, I worked on projects involving 
               recommendation systems, data analytics, and network performance analysis. 
               Prior to UG, I began my education at the University of Cape Coast (UCC), studying education,
                which provided the foundation for my initial career.
            </p>
            <p className="home-about-body">
              Coming from education as my first career, I am passionate about continuing my academic journey. 
              I intend to pursue a PhD in Computer Science to further my research in computer science education, human
              computer interaction, and reinforcement learning with human feedback.
            </p>

            <p className="home-about-body">
              I love teaching. Currently, I am a volunteer teacher at AF Youth Mentorship program where I teach programming. Interested? you can check or join 

              <a href="https://classroom.google.com/c/NzI2MzAwNzk0NTIy?cjc=6buwary"> here.</a> This is mostly a Python course. 
            </p>

            <Row className="align-items-start">
              {/* Interest Section (Left Column) */}
              <Col md={8} className="home-about-description">
                <h2>Interest</h2>
                <ul className="interest-list">
                  <li><b className="purple">Computer Science Education</b></li>
                  <li><b className="purple">Human Computer Interaction</b></li>
                  <li><b className="purple">Reinforcement Learning with Human Feedback</b></li>
                  
                </ul>
              </Col>

              {/* Education Section (Right Column) */}
              <Col md={4} className="home-about-description">
                <h2>My Education</h2>
                <ul className="education-list">
                  <li><b>Computer Science</b>, University of Ghana (2019 - 2023)</li>
                  <li><b>Diploma in Education</b>, University of Cape Coast (2011 - 2014)</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Social Links Row */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Edkofifi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edmond-teye/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
