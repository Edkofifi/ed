import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Code from "../../Assets/code.webp";
import Particle from "../Particle";
import CodeBlock from "./Code";
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
                Code.whyCode()
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
            For five years, that became my job. Guess when your passion is your job. I LOVE every moment standing before those kids and imparting knowledge. 
            </p>

            <p style={{ fontSize: "1.2em", fontWeight: "400", color: "#0f5291" }}>
                Teaching Philosophy
              </p>

            <p className="home-about-body">
             When I was teaching some students about string slicing, a student asked "But what do we need negative indexes for"? I thought to myself, "wow, what a nice question". After explaining  that sometimes, it's quicker when we want to find what's in the other end of the string, and demonstrating this, I left the class thinking, what if we tell students why we do what we do when learning programming?

            </p>

            <p className="home-about-body">
            code.whyCode() is a teaching approach that incorporates the 'why' concept into the teaching and learning, in this case learning to code. This learning approach emphasizes what we need the tools (concepts) above what the syntax could be. 
             
            </p>

            <p className="home-about-body">
            As a teacher, you might be implementing code.whyCode() in your lessons inadvertently through classroom activities and assessment. What does code.whyCode() means to you then? Awareness is key. It makes you more intentional and more so, explore how this concept can be incorporated into into lesson plans. 
            </p>
            <p style={{ fontSize: "1.2em", fontWeight: "400", color: "#0f5291" }}>
                Programmatic Implementation of <strong>Code.Whycode()</strong>
              </p>
            <CodeBlock/>
    
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default WhyCode;
