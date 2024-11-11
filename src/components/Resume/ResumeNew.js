import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Edmond CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Initialize PDF.js worker (needed for rendering PDFs)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); // To store the number of pages

  // Update the width when the window is resized (to adjust PDF scale)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Callback to handle loading of PDF and get number of pages
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button (Centered) */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Viewer */}
        <Row className="resume">
          <Col xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Document
              file={pdf}
              className="pdf-document"  
              onLoadSuccess={onDocumentLoadSuccess} // Load the number of pages
            >
              {/* Map through all pages and render each one vertically */}
              {[...Array(numPages)].map((_, i) => (
                <div key={i} className="pdf-page"> {/* Apply the custom CSS class to each page */}
                  <Page pageNumber={i + 1} scale={width > 786 ? 1.7 : 0.6} />
                </div>
              ))}
            </Document>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
