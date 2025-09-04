"use client"
import React, { useState } from 'react';
// import ThemeProvider from './components/ThemeProvider';
import Header from  './components/Headers';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectWizard from './components/ProjectWizard';
import ThemeProvider from "@/app/components/ThemeProvider";

function App() {
  const [isProjectWizardOpen, setIsProjectWizardOpen] = useState(false);

  const openProjectWizard = () => setIsProjectWizardOpen(true);
  const closeProjectWizard = () => setIsProjectWizardOpen(false);

  return (
    
    
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header onStartProject={openProjectWizard} />
        <Hero onStartProject={openProjectWizard} />
        <Services />
        <About />
        <Contact />
        <Footer />
        
        <ProjectWizard
          isOpen={isProjectWizardOpen}
          onClose={closeProjectWizard}
        />
      </div>
     
  );
}

export default App;