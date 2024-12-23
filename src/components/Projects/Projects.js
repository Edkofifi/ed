import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import llm_data from "../../Assets/Projects/llm_dataset.png";
import twitter_data from "../../Assets/Projects/twitter_data.png";
import e_commerce from "../../Assets/Projects/e_commerce.jpg";
import outlier_metric from "../../Assets/Projects/average_metric_graphs.png";
import loan_project from "../../Assets/Projects/loan_project.png";
import customs from "../../Assets/Projects/customs.png";
import perf_app from "../../Assets/Projects/application-performance.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are some selected projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customs}
              isBlog={false}
              title="Customs Declaration Application"
              description="This is a web application that allows to make import or export declarations to the UK's HMRC.
              When users submit their declarations, this application supplements it with some stand-in data and transmit it to the external API.
              It also tracks the status of the declarations."
              ghLink=""
              demoLink="https://customs-uk.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perf_app}
              isBlog={false}
              title="Performance Application"
              description="The performance application is built for a client in Ghana. It allows to assign tasks/goals for departments,
              and individual employees, assess those and generate a report."
              ghLink=""
              demoLink="https://performance-app-nextjs-v001.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm_data}
              isBlog={false}
              title="LLM Dataset Construction"
              description="
              I inspected code and responses that are used to refine LLM responses.
              I worked on more than 1000 responses, ensuring their quality, and making them conversational.
              "
              ghLink=""
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">  
            <ProjectCard
                imgPath={outlier_metric}
                isBlog={false}
                title="Examing outlier behaviour in recommender systems"
                description="A research project that examines the behaviour of outliers in recommender system.
                Metrics such as average cosine similarity and avearage intra-list  were used to examine data "
                ghLink="https://github.com/Edkofifi/Recom-Systems"
                demoLink=""
              />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e_commerce}
              isBlog={false}
              title="Course Project"
              description="This is a mini course project submitted within the semester. It assesses key skills in databse design, backend development in C#.  "
              ghLink="https://github.com/Edkofifi/shoprite/tree/base"
              demoLink="https://youtu.be/uJhhBX6ZJ0s"
            />
          </Col>

          <Col md={4} className="project-card">  
            <ProjectCard
                imgPath={loan_project}
                isBlog={false}
                title="Loan Analysis Project"
                description="A project submitted as part of final requirement in Udacity 
                nano degree program. I investigated variables that impact loan defaults. "
                ghLink="https://github.com/Edkofifi/Project_Loans"
                demoLink=""
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter_data}
              isBlog={false}
              title="Twitter Data Mining Project"
              description="As part of my course work requirements, I mine data from twitter for group work that we undertook.
              This is more than 200,0000 twitter data about the President of Ghana, Hon. President Akuffo Addo."
              ghLink="https://github.com/Edkofifi/Opinion-assessment-about-President-Akuffo-Addo"
              demoLink=""
            />
          </Col>

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
