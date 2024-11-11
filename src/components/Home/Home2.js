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
              display: "flex",   // Use flexbox to align image and text
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
              I am a software developer working on contract as a back-end. Currently, I am working on a custom declaration application that provides a medium to make customs declarations to the UK.
            </p>

            <p className="home-about-body">
              Prior to that, I worked as an inspector for a large language model (LLM) dataset (mostly python codes) construction project where I ensured data created to refine the model's responses are of high quality and very conversational. In that role, I worked directly on more than 1000 human responses. Before that, I worked with Ghana Education Service as a K-12 teacher, teaching mainly ICT and Basic Mathematics. During that time, I also worked as a part-time school administrator.
            </p>

            <p className="home-about-body">
              I completed my undergraduate studies at the University of Ghana (UG) in September, 2023 in computer science. In my final year, I worked on research projects in collaboration with a PhD student, which culminated in my final year project. I also worked on projects involving recommendation systems, data analytics, and network performance. I started my education at the University of Cape Coast (UCC) in 2014, which prepared me for my initial work in education. Coming from education as my first career, I intend on pursuing a PhD in computer science to expand my knowledge as a researcher in data management and reinforcement learning. 
            </p>

            <p className="home-about-body">

              <a href="https://classroom.google.com/c/NzI2MzAwNzk0NTIy?cjc=6buwary"> here</a>
            </p>

            <p className="home-about-body">
              <br />Mostly, I work with
              <i>
                <b className="purple">Python, Javascript, Java</b>
              </i>
              <br />
              <br />
              My fields of interest are building &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i> and also in areas related to{" "}
              <b className="purple">machine learning</b>.
              <br />  
              <br />
              {/* Whenever possible, I also apply my passion for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern Javascript Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
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
