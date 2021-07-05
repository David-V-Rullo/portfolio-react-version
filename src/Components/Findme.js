import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
const Findme = () => {
    return (
        <div className="col-2 m-auto">
            <h4>Find Me:</h4>
            <ul className="list-group bg-dark text-light">
                <li className="list-group-item bg-dark"><FaGithub size="2em" />GitHub</li>
                <li className="list-group-item bg-dark"><FaLinkedinIn size="2em" />LinkedIn</li>
                <li className="list-group-item bg-dark"><FaGithub size="2em" />GitHub</li>
            </ul>
        </div>
    )
}

export default Findme
