import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
// import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Skills } from "./components/skills";
import { Timeline } from "./components/timeline";
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
  const animatedElementsRef = useRef([]);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      try {
        // In a real app, this might be an API call
        setLandingPageData(JsonData);
        document.body.classList.add("dark-theme");
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElements = animatedElementsRef.current;
    currentElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      currentElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme");
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div
      className={`app-container ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <Navigation onThemeToggle={toggleTheme} isDarkTheme={isDarkTheme} />
      <div className="content-wrapper">
        <Header 
          data={landingPageData?.Header} 
          ref={(el) => (animatedElementsRef.current[0] = el)}
          className="animate-fade-in" 
        />
        <About 
          data={landingPageData?.About} 
          ref={(el) => (animatedElementsRef.current[1] = el)}
          className="animate-slide-up" 
        />
        <Skills 
          ref={(el) => (animatedElementsRef.current[2] = el)}
          className="animate-fade-in" 
        />
        <Timeline 
          ref={(el) => (animatedElementsRef.current[3] = el)}
          className="animate-slide-up" 
        />
        {/* <Gallery data={landingPageData?.Gallery} className="animate-fade-in" /> */}
        <Contact 
          data={landingPageData?.Contact} 
          ref={(el) => (animatedElementsRef.current[4] = el)}
          className="animate-fade-in" 
        />
      </div>
    </div>
  );
};

export default App;
