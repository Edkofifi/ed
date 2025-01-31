import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import Particle from "../Particle"
import final_year_thesis from "../../Assets/final_year_thesis.pdf"
import Button from "react-bootstrap/Button"
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Research() {
  return (
    <section>
    <Particle />
    <Container fluid className="home-about-section"
         id="about"
         style={{marginTop:"50px"}}>
      <Container>
        <Row className="align-items-start"> 
          {/* Image Column (1/3 width) */}
          



          {/* Text Column (2/3 width) */}
          <Col  className="home-about-description">
            <p style={{ fontSize: "1.5em", fontWeight: "700", color: "#0f5291", marginLeft: "10.0em", justifyContent: "center", }}>
                Research Experience
            </p>
            
            <p className="home-about-body">
              My research interest has been in computer science education, and HCI. These are key areas that I have studied and have started initial research work on.
              As a final year student at the University of Ghana, Department of Computer Science, I collaborated on research works with a PhD candidate. We worked together on 
              a systematic review that synthesized 84 papers on credibility factors of virtual reality applications.              
            </p>

            <p className="home-about-body">
            The objectives are to: 1) examine the factors that enhance the credibility of VR
            environments; 2) determine the dimensions used to measure the credibility of VR applications;
            and 3) catalog the metrics used to assess credibility in VR environments. Adhering to the guidelines
            set forth by Kitchenham and Charters for systematic literature reviews, the study utilizes academic
            databases to source relevant research papers. A total of 84 papers that met the inclusion criteria
            were analyzed, and a thematic summary of the findings is provided. The study reveals that
            credibility design in VR is a complex and relatively unexplored area that warrants further
            investigation.
            </p>

            <p className="home-about-body">
            Credibility analysis in VR typically focuses on dimensions such as presence, trust,
            reliability, validity, usability, security, and safety. It also highlights evaluation metrics commonly
            used to assess credibility, including psychological measures, physiological measures (e.g., eyetracking, heart rate, skin conductance), performance measures (e.g., accuracy, speed, error rate),
            and behavioral measures (e.g., click-through rate, bounce rate, conversion rate). Finally, the study
            discusses the implications of these results for designing credible VR and related environments.
            </p>

            <p className="home-about-body">
            Download my final year thesis : 
                <a href={final_year_thesis} download className="download-btn">
                here
                </a>
            </p>

            {/* <p style={{ fontSize: "1.2em", fontWeight: "400", color: "#0f5291" }}>
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
              </p> */}
    
          </Col> 
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Research;
