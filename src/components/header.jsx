import React, { useEffect, useRef, useState } from "react";

export const Header = (props) => {
  // Animated text effect
  const titles = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "React Developer",
    "DotNet Developer",
    "Team Player",
    "git guru",
    "Open Source Enthusiast",
    "Cloud Engineer",
    "DevOps Engineer",
    "AI/ML Enthusiast", 
    "Cybersecurity Specialist",
    "Cloud Architect",   
    "Problem Solver",
    
    
  ];
  const [current, setCurrent] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 400);
    }, 2200);
    return () => clearTimeout(timeoutRef.current);
  }, [current, fade, titles.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header id="header">
        <div className="intro hero-section" style={{ backgroundImage: "url(img/portfolio/01-large.jpg)" }}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text hero-content">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                  </h1>
                  <h2 className={`hero-animated-text${fade ? " fade-in" : " fade-out"}`}>
                    {titles[current]}
                  </h2>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <div className="header-buttons">
                    <a
                      href="#timeline"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Back to top"
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};
