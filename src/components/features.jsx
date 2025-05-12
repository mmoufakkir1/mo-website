import React, { useEffect, useRef } from "react";

export const Features = (props) => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-feature');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
    featureItems?.forEach((item) => observer.observe(item));

    return () => {
      featureItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <div id="features" className="text-center features-section">
      <div className="container">
        <div className="section-title">
          <h2 className="animate-title">What I Do</h2>
        </div>
        <div className="row" ref={featuresRef}>
          {props.data.map((d, i) => (
            <div 
              key={`${d.title}-${i}`} 
              className="feature-item"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="feature-box">
                <span className="feature-icon"><i className={`fa ${d.icon}`}></i></span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
