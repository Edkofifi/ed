import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Edmond Agbovi-Teye</span>
            from <span className="purple"> Accra, Ghana.</span>
            <br />
            I am currently employed as a software developer at Afriquetek.
            <br />
            I have completed BSc Computer Science Program at the University of Ghana, Legon
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(1 1 100)" }}>
            "Dig deeper and deeper; the waters will pull out!"{" "}
          </p>
          <footer className="blockquote-footer">Edmond</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
