import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Code from "../../Assets/code.webp";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function WhyCode() {
  return (
    <section>
    <Particle />
    <Container fluid className="home-about-section"
         id="about"
         style={{marginTop:"50px"}}>
      <Container>
        <Row className="align-items-start"> 
          {/* Image Column (1/3 width) */}
          <Col
            md={4}
            className="profile-image"
            style={{
              paddingBottom: 20,
              paddingLeft: "30px",
              paddingTop: "40px", 
              display: "flex",  
              flexDirection: "column", // Stack image and text vertically
              alignItems: "center",  // Center content horizontally
            }}
          >
            {/* Image */}
            <img
              src={Code}
              alt="home pic"
              className="img-fluid profile-img"
              
            />
            
            {/* Name and Job Role under the Image */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              

              <p style={{ fontSize: "1.5em", fontWeight: "700", color: "#0f5291" }}>
                code.whyCode()
              </p>
            </div>
          </Col>



          {/* Text Column (2/3 width) */}
          <Col md={8} className="home-about-description">
            <p style={{ fontSize: "1.5em", fontWeight: "700", color: "#0f5291" }}>
                code.whyCode()
            </p>
            
            <p className="home-about-body">
            I started teaching my peers basic Math as a grade 6-8 student, not knowing that will become a passion. You know, there are few things I do without getting tired, and teaching is obviously #1 on the list. From grade 6 to college, I have taught colleagues on countless occassions. 
            Tell me what else could be passion. For five years, that became my job. Guess when your passion is your job. I LOVE every moment of standing before those kids and imparting knowledge. 
            </p>

            <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#0f5291" }}>
                Teaching Philosophy
              </p>

            <p className="home-about-body">
             When I was teaching some students about string slicing, a student asked "But what do we need negative indexes for"? I thought to myself, "wow, what a nice question". After explaining  that sometimes, it's quicker when we want to find what's in the other end of the string, and demonstrating this, I left the class thinking, what if we tell students why we do what we do when learning programming?

            </p>

            <p className="home-about-body">
            code.whyCode() is a learning idea that incorporates the 'why' concept into the teaching and learning, in this case learning to code. This learning approach emphasizes what we need the tools (concepts) above what the syntax could be. 
             
            </p>

            <p className="home-about-body">
            As a teacher, you might be implementing code.whyCode() in your lessons inadvertently through classroom activities and assessment. What does code.whyCode() means to you then? Awareness is key. It makes you more intentional and more so, explore how this concept can be incorporated into into lesson plans. 
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
    </section>
  );
}

export default WhyCode;
