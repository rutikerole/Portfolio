import React from 'react';
import HeroSection from '../components/HeroSection'; // hero sec
import AboutSection from '../components/AboutSection'; // about sec
import ServiceSection from '../components/ServiceSection'; // service sec
import ProjectSection from '../components/ProjectSection'; // project sec
import FooterSection from '../components/FooterSection'; // footer sec

export default function Home() {
  return (
    // in app.js => we call Router in it => we ad home and other pages,
    // and in home pages we ad => following section
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}
