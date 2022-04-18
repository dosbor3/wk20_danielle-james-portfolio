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
            src: '"{require(`../../assets/large/$1.png`)}"',
            deploy:'https://pure-fjord-98425.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/AA-Budget-Tracker'
        },
        {
            name: 'DevelopIT Full Stack Forum',
            description: 'CMS-style blog site forum, where current and prospective developers can share inquiries and responses',
            deploy:'https://safe-river-61746.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/AA-Budget-Tracker'
        },
        {
            name: 'The Tech Blog',
            description: 'CMS style blog site where developers can publish their blog posts and comment on other developer\'s posts as well',
            deploy:'https://git.heroku.com/still-fjord-46453.git',
            gitHub: 'https://github.com/dosbor3/wk14_mvc-tech-blog'
        },
        {
            name: 'Handy Little Note Taker',
            description: 'App that allows users to write and save notes, using Express.js backend technologies',
            deploy:'https://note-taker-dosbor3.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/wk11_note-taker'
        }
    ]);

    
    
  return (    
    <section>     
      <ul className='flex-row'>
      {projects.map((project, i) => (
          <li>               
            <h1 id='project-title'>{capitalizeFirstLetter(project.name)}</h1>
            <p>{project.description}</p>
            <p>Deploy Link: <a href={project.deploy}>{project.deploy}</a></p>
            <p>gitHub Link: <a href={project.gitHub}>{project.gitHub}</a></p>
            <div className="flex-row">
                <img
                    src={img1}
                    alt={project.name}
                    className='img-thumbnail mx-1'
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