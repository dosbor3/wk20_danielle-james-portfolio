import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([

    {name: "About"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"}
  ]);

  const [currentCategory, setCurrentCategory] = useState('About');
  
  

  const renderPage = () => {
    if (currentCategory.name === 'About') {
      return <About />;
    }

    if(currentCategory.name === 'Portfolio') {
      return <Portfolio />;
    }

    if(currentCategory.name === 'Contact') {
      return <Contact />;
    }

    if(currentCategory.name === 'Resume') {
      return <Resume />;
    }
  }
  console.log(currentCategory.name);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}      
      ></Nav>
      <main>
        {renderPage()}             
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
