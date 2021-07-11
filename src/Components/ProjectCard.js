import React from 'react'
import { Card, Image, Icon, Header } from 'semantic-ui-react'
import headshot from '../images/Headshot.jpg'
import projectOne from '../images/Project1.PNG'
import projectTwo from '../images/Project2.png'



const PROJECT_CARDS = [
    { header: "Congress Bill Tracker Alpha", description: "This is our first iteration of an interactive web app that shows users the most current bills introduced by the U.S. Congress", image:projectOne, extra: 'This app had basic functionality and would return results from an API, properly rendered', key: '1'},
    { header: "Congress Bill Tracker Beta", description: "This is the second iteration of our web app that shows users the most current bills introduced by the U.S. Congress", extra: 'This version included database connections and the ability to create user profiles', image:projectTwo, key: '2' },
    { header: "Congress Bill Tracker", description: "This is an interactive web app that shows users the most current bills introduced by the U.S. Congress", photo: "../images/screenshot.PNG" },
    { header: "Congress Bill Tracker", description: "This is an interactive web app that shows users the most current bills introduced by the U.S. Congress", photo: "../images/screenshot.PNG" }
  ];

const ProjectCard = () => {
    
    return (
        <div>
            <Card.Group centered items={PROJECT_CARDS} />
        </div>
    )
}

export default ProjectCard
