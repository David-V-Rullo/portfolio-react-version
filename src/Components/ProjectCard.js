import React from 'react'
import { Card, Image, Icon, Header } from 'semantic-ui-react'
import headshot from '../images/Headshot.jpg'
import projectOne from '../images/Project1.PNG'
import projectTwo from '../images/Project2.png'
import workday from '../images/Workday.JPG'
import regex from '../images/Regex.JPG'
import password from '../images/Password.JPG'
import teamprofile from '../images/Teamprofile.JPG'
const PROJECT_CARDS = [
    { header: "Congress Bill Tracker Alpha", description: "This is our first iteration of an interactive web app that shows users the most current bills introduced by the U.S. Congress", image:projectOne, extra: 'This app had basic functionality and would return results from an API, properly rendered', key: '1', href:'https://github.com/David-V-Rullo/Congress-Bill-Tracker'},
    { header: "Congress Bill Tracker Beta", description: "This is the second iteration of our web app that shows users the most current bills introduced by the U.S. Congress", extra: 'This version included database connections and the ability to create user profiles', image:projectTwo, key: '2', href:'https://github.com/David-V-Rullo/New-Congressional-Bill-Tracker'},
    { header: "Work Day Scheduler", description: "This was a simple work day scheduler written entirely in JavaScript", image:workday, key:'3', href:'https://github.com/David-V-Rullo/Work-Day-Scheduler' },
    { header: "RegEX Tutorial", description: "This is a very quick and simple rundown for learning the basics of RegEx", extra:'I have included this to show my skill as a writer and my ability to explain complex topics', image:regex, key:'4', href:'https://github.com/David-V-Rullo/RegEx-Tutorial' },
    { header: "Simple Password Generator", description: 'Just like the name says, this basic app takes user inputs and generates a random password', extra:"I included this because it was my very first project and I'm still proud of it", href:'https://github.com/David-V-Rullo/Random-Password-Generator', image:password, key:'5'},
    { header: 'Team Profile Generator', description:'This app uses the command line to receive user input on the makeup of a project team, then generates an HTML document that shows your team profile', image:teamprofile, key:'6'}
  ];

const ProjectCard = () => {
    
    return (
        <div>
            <Card.Group centered items={PROJECT_CARDS} />
        </div>
    )
}

export default ProjectCard
