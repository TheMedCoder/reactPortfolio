import { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Contacts from './components/Contacts';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-gray-950 min-h-screen overflow-x-hidden w-screen">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Contacts />
      </div>


    </>
  )
}

export default App
