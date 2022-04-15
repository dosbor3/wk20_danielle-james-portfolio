import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {

  const [projects] = useState([
    {
        name: 'AA Budget Tracker',
        description: 'PWA app that allows users to track finances with little to no internet connection'
    },
    {
        name: 'DevelopIT Full Stack Forum',
        description: 'CMS-style blog site forum, where current and prospective developers can share inquiries and responses'
    },
    {
        name: 'AA Budget Tracker',
        description: 'PWA app that allows users to track finances with little to no internet connection'
    },
    {
        name: 'Handy Little Note Taker',
        description: 'App that allows users to write and save notes, using Express.js backend technologies'
    }
]);
const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div>
      <Nav
      projects={projects}
      setCurrentProject={setCurrentProject}
      currentProject={currentProject}
      ></Nav>
      <main>
        <div>
        <Portfolio></Portfolio>
        <About></About>
        </div>
      </main>      
    </div>
  );
}

export default App;
