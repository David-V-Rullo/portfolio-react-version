import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Header, List, Container } from "semantic-ui-react";
const Findme = () => {
  return (
    <Container textAlign="right">
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>
              GitHub
              <List.Icon name="github" size="large" verticalAlign="middle" />
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as="a">
              Linkedin{" "}
              <List.Icon name="linkedin" size="large" verticalAlign="middle" />
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          
          <List.Content>
            <List.Header as="a">Stack Overflow<List.Icon
            name="stack overflow"
            size="large"
            verticalAlign="middle"
          /></List.Header>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
};

export default Findme;
