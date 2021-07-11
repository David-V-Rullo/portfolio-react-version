import React from "react";
import { Header, List, Container } from "semantic-ui-react";
const Findme = () => {

  const listStyle = {fontSize: '2rem'}
  return (
    <Container textAlign="right">
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header style={listStyle} as='a'>
              GitHub
              <List.Icon name="github" size="large" verticalAlign="middle" />
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as="a" style={listStyle}>
              Linkedin{" "}
              <List.Icon name="linkedin" size="large" verticalAlign="middle" />
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          
          <List.Content>
            <List.Header as="a" style={listStyle}>Stack Overflow<List.Icon
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
