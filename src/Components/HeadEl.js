import headshot from "../images/Headshot.jpg";
import { Header, Image, Grid, Container, Divider } from "semantic-ui-react";
const HeadEl = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "navy",
        }}
      >
        <Grid padded columns="equal" verticalAlign='middle'>
          <Grid.Row columns={3}>
            <Grid.Column
              size={7}
              verticalAlign="middle"
              style={{
                padding: "2em",
                paddingBottom: "8em",
                margin: "2em",
                marginRight: "2em",
              }}
            >
              <Header  style={{ color: "antiquewhite", fontSize: '3rem' }}>
                Hi, My Name is David Rullo
                <Divider />
                <Header.Subheader style={{ color: "antiquewhite", fontSize: '2rem' }}>
                  I am an aspiring Web Developer and this is my portfolio.
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Divider hidden />
            <Grid.Column size={3}>
              <Image
                verticalAlign="middle"
                bordered
                rounded
                size="medium"
                src={headshot}
                alt="My wonderful headshot"
                style={{ margin: "1em", marginLeft: "8em" }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HeadEl;
