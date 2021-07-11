import React from 'react'
import { Grid, Container, Header, Image, Link, Card } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'
const Projects = () => { 

    return (
        <Container>
            <Header size='huge' textAlign='center'>Projects:</Header>
            <ProjectCard />
            {/* <Grid centered padded>
                <Grid.Row columns={1}>
                    <Card name={PROJECT_CARDS[0]} />
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                </Grid.Row>
                <Grid.Row columns={5}>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                    <Grid.Column>Project</Grid.Column>
                </Grid.Row>
            </Grid> */}
        </Container>
    )
}

export default Projects
