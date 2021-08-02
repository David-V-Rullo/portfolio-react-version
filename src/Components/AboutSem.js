import React from "react";
import { Grid, Image, Container, Header, Divider, Button, Icon } from "semantic-ui-react";
const AboutSem = () => {
  const buttonStyle = {marginTop: '1rem', padding:'1.5rem'}
  const listStyle = {fontSize: '2rem'}
  return (
    <Container fluid>
      <Grid columns='equal' relaxed padded centered stackable columns={3}>
        <Grid.Row>
          <Grid.Column width={2} style={{backgroundColor: 'navy', color: 'antiquewhite', marginRight:'3em', padding:'2em'}}>
            <Header size='medium' style={{color: 'antiquewhite'}}>About Me:</ Header>
            <p>
              I am an aspiring web developer who is currently attending the
              Rutgers University Full Stack Bootcamp. I am going blind and have
              had to abandon my law career for a career that is much more
              favorable to working from home
            </p>
          </Grid.Column>
          <Grid.Column width={7}>
              <Header textAlign='center' size='large'>Background</Header>
              <Divider />
            <Container text style={{backgroundColor: 'antiquewhite', padding:'2rem', border:'2px solid navy'}}>
            <p>
              I got my first computer when I was in the eigth grade. This was,
              to this day, the best Christmas gift I ever received. I poured
              every second into tinkering with that computer - a custom built
              Intel 486 33mhz desktop with a whopping 2MB of ram and a
              bottomless 285MB hard drive.
            </p>
            <p>
              My first program was written in a DOS text editor; using QBASIC I
              was able to make a program that let me launch all of my games with
              a couple button pushes.
            </p>
            <p>
              I never stopped enjoying playing and tinkering with computers, but
              when it came time to decide to do after high school I opted to
              joine the Marines. During my time in the Marine Corps I received a
              commendation from the Admiral of the U.S. Navy 7th Fleet for
              turning a bunch of old computers found in garbage into functioning
              machines that my Marines could use to stay in touch with friends
              and family via a new fangled technology called the "Internet".{" "}
            </p>
            <p>
              Since my time in the Marine Corps I was a police officer for
              fourteen years and I am also a practicing attorney and prosecutor
              in New Jersey.
            </p>
            <p>
              Unfortunately, in 2017, I was diagnosed with a degenerative retina
              disease called Retinitus Pigmentosa. This disease has chipped away
              at my vision and left me almost totally blind. This forced me to
              reevaluate what I wanted to do. Given my lifelong interest in
              computers and a newfound understanding of the difficulties that
              living with a disability can be, I decided to become a full-stack
              web developer with a focus on UI/UX design and accessibility.{" "}
            </p>
            <br />
            <p>I look forward to seeing what this new career has to offer!</p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Header
              size="huge"
              style={{
                backgroundColor: "navy",
                color: "antiquewhite",
                padding: ".7em",
              }}
            >
              Find Me:
            </Header>
            <Button href="https://github.com/David-V-Rullo" style={buttonStyle} fluid size="huge" color="black">
              <Icon name="github" size="large" />
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/davidrullo/" style={buttonStyle} fluid size="huge" color="black">
              <Icon name="linkedin" color='blue' size="large" />
              LinkedIn
            </Button>
            <Button style={buttonStyle} fluid size="huge" color="black">
              <Icon name="stack overflow" color='orange' size="large" />
              Stack Overflow
            </Button>
            
      </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AboutSem;
