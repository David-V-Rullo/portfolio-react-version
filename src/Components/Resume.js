import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Grid, Button, Container, Header, Icon } from "semantic-ui-react";

import resume from "../assets/rulloresume.pdf";
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoad({ numPages }) {
    setNumPages(numPages);
  }
  const buttonStyle = {marginTop: '1rem', padding:'1.5rem'}

  return (
    <Container fluid>
      <Grid columns="equal" relaxed padded stackable>
        <Grid.Row columns={3}>
          <Grid.Column
            width={2}
            style={{
              backgroundColor: "navy",
              color: "antiquewhite",
              marginRight: "3em",
              padding: "2em",
            }}
          >
            <h1>Resume:</h1>
            <p>
              Displayed is a sample of my current resume, as well as my relevant developer
              skillsets
            </p>
          </Grid.Column>
          <Grid.Column
            floated="left"
            width={7}
            style={{ border: "2px solid navy" }}
          >
            <Document file={resume}>
              <Page scale={1.4} pageNumber={1} />
            </Document>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header
              size="huge"
              style={{
                backgroundColor: "navy",
                color: "antiquewhite",
                padding: ".7em",
              }}
            >
              Languages:
            </Header>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="js square" color='yellow' size="large" />
              JavaScript
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="html5" color='orange' size="large" />
              HTML 5
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="css3" color='blue' size="large" />
              CSS 3
            </Button>
            <Button style={buttonStyle} fluid  size="huge" color="black">
              <Icon name="python" size="large" />
              Python
            </Button>
            <Header
              size="huge"
              style={{
                backgroundColor: "navy",
                color: "antiquewhite",
                padding: ".7em",
              }}
            >
              Tools and Frameworks:
            </Header>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="react" color='blue' size="large" />
              React
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="node js" color='olive' size="large" />
              NodeJS
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="bootstrap" size="large" />
              Bootstrap
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="react" color='teal' size="large" />
             Semantic-UI
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Resume;
