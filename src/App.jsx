import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about"; 
import { Gallery } from "./components/gallery"; 
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      try {
        // In a real app, this might be an API call
        setLandingPageData(JsonData);
        document.body.classList.add('dark-theme');
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className={`app-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Navigation onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />
      <div className="content-wrapper">
        <Header data={landingPageData?.Header} className="animate-fade-in" />
        <Features data={landingPageData?.Features} className="animate-slide-up" />
        <About data={landingPageData?.About} className="animate-slide-up" /> 
        <Gallery data={landingPageData?.Gallery} className="animate-fade-in" />  
        <Contact data={landingPageData?.Contact} className="animate-fade-in" />
      </div>
    </div>
  );
};

export default App;
