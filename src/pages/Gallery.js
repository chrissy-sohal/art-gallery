import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../components/GalleryCards";


function Gallery() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Gallery
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={taste}
              isBlog={false}
              title="Blue"
              description="A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={workout}
              isBlog={false}
              title="Green"
              description="A workout tracker, designed to help you keep track of your healthy lifestyle."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={brewery}
              isBlog={false}
              title="Pnk"
              description="An app that lets a user find local breweries in a searched city with an interactive map."
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={team}
              isBlog={false}
              title="Team Profile Generator"
              description="A command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person."
                      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={editor}
              isBlog={false}
              title="Text Editor"
              description="A simple text editor app that can function both online and offline, with a variety of data persistence options."
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="A command-line application for managing a company's employees using node, inquirer, and MySQL."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;