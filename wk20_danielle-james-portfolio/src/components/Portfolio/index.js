import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import img1 from '../../assets/large/1.png';
import img2 from '../../assets/large/2.png';
import img3 from '../../assets/large/3.png';
import img4 from '../../assets/large/4.png';
import img5 from '../../assets/large/5.jpg';
import img6 from '../../assets/large/6.jpg';


function Portfolio(props) {
    
    const [projects] = useState([
        {
            name: 'AA Budget Tracker',
            description: 'PWA app that allows users to track finances with little to no internet connection',
            src: img1,
            deploy:'https://pure-fjord-98425.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/AA-Budget-Tracker'
        },
        {
            name: 'DevelopIT Full Stack Forum',
            description: 'CMS-style blog site forum, where current and prospective developers can share inquiries and responses',
            src: img2,
            deploy:'https://safe-river-61746.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/AA-Budget-Tracker'
        },
        {
            name: 'The Tech Blog',
            description: 'CMS style blog site where developers can publish their blog posts and comment on other developer\'s posts as well',
            src: img3,
            deploy:'https://git.heroku.com/still-fjord-46453.git',
            gitHub: 'https://github.com/dosbor3/wk14_mvc-tech-blog'
        },
        
        {
            name: 'Handy Little Note Taker',
            src: img4,
            description: 'App that allows users to write and save notes, using Express.js backend technologies',
            deploy:'https://note-taker-dosbor3.herokuapp.com/',
            gitHub: 'https://github.com/dosbor3/wk11_note-taker'
        }, 
        {
            name: 'Password Generator',
            description: 'Program that generates a password based on criteria selected by the user',
            src: img5,
            deploy:'https://dosbor3.github.io/wk3_password-generator/',
            gitHub: 'https://github.com/dosbor3/wk3_password-generator'
        },
        {
            name: 'Violetlattes',
            description: 'An online store that will allow artist Kiorsten to sell her digital artwork.  This app was built with the followng technologies: HTML, CSS, Bootstrap, JavaScript, Node, React, Express, MongoDB, GraphQL, Apollo, JWT, StripeJs, Mongoose, Nodemon',
            src: img6,
            deploy:'https://sheltered-castle-99209.herokuapp.com/',
            gitHub: 'https://github.com/DaniDelia253/violet-lattes'
        },
        
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
                    src={project.src}
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
