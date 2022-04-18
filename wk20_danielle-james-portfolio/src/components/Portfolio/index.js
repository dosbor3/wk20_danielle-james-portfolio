import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import img1 from '../../assets/large/1.png';
import img2 from '../../assets/large/2.png';
import img3 from '../../assets/large/3.png';
import img4 from '../../assets/large/4.png';


function Portfolio(props) {
    const [projects] = useState([
        {
            name: 'AA Budget Tracker',
            description: 'PWA app that allows users to track finances with little to no internet connection',
            deploy: 
            image: 'img1'
        },
        {
            name: 'DevelopIT Full Stack Forum',
            description: 'CMS-style blog site forum, where current and prospective developers can share inquiries and responses',
            image: '2'
        },
        {
            name: 'The Tech Blog',
            description: 'CMS style blog site where developers can publish their blog posts and comment on other developer\'s posts as well',
            image: '3'
        },
        {
            name: 'Handy Little Note Taker',
            description: 'App that allows users to write and save notes, using Express.js backend technologies',
            image: '4'
        }
    ]);
    const [currentProject, setCurrentProject] = useState(projects[0]);
    console.log(projects.image)
  return (    
    <section>     
      <ul className='flex-row'>
      {projects.map((project) => (
          <li>               
            <h1>{capitalizeFirstLetter(project.name)}</h1>
            <p>{project.description}</p>
            <div className="flex-row">
            <img
          src={img1}
          alt={project.name}
          className="img-thumbnail mx-1"
          key={project.name}
        />
            </div>
            </li>          
        ))}
      </ul>          
    </section>
  );
}
export default Portfolio;