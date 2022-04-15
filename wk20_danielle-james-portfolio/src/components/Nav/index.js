import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const [projects] = useState([
        {
            name: 'AABT',
            description: 'PWA app that allows users to track finances with little to no internet connection'
        },
        {
            name: 'DevelopIT Full Stack Forum',
            description: 'CMS-style blog site forum, where current and prospective developers can share inquiries and responses'
        },
        {
            name: '',
            description: 'PWA app that allows users to track finances with little to no internet connection'
        },
        {
            name: 'Handy Little Note Taker',
            description: 'App that allows users to write and save notes, using Express.js backend technologies'
        }
    ]);    
    const [currentProject, setCurrentProject] = useState(projects[0]);
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentProject.name);
      }, [currentProject]);


    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid='link' href="/">
                    <span role="img" aria-label="laptop">
                    {" "}
                    💻
                    </span>{" "}
                    Danielle James
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a 
                        href="#about"
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {projects.map((project) => (
                        <li className={`mx-1 ${
                            currentProject.name === project.name && 'navActive'
                        }`} key={project.name}>
                        <span onClick={() =>{
                            setCurrentProject(project)
                        }}
                        >
                        {capitalizeFirstLetter(project.name)}
                        </span>
                        </li>
                    ))}                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;