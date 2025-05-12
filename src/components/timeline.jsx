import React from "react";

const timelineData = [
  {
    year: "2017 – 2025",
    title: "Full Stack Developer",
    org: "Mad Mobile Inc, Tampa, FL",
    description: "Led product development for SaaS apps, optimized performance, and mentored junior devs."
  },
  {
    year: "2015 – 2017",
    title: "Azure Cloud Engineer Consultant",
    org: "IronEagleX, Tampa, FL",
    description: "Built cloud-based solutions, integrated microservices, and automated deployments."
  },
  {
    year: "2012 – 2015",
    title: "Software Engineer & System Admin",
    org: "JABIL, St. Petersburg, FL",
    description: "Developed .NET enterprise software and optimized SQL databases."
  },
  {
    year: "2010 – 2012",
    title: "System Administrator Assistant",
    org: "JABIL, St. Petersburg, FL",
    description: "Maintained server infrastructure and developed web solutions."
  },
  {
    year: "2017",
    title: "B.A. Computer Science",
    org: "Florida State University",
    description: "Graduated with a focus on software engineering."
  },
  {
    year: "2000",
    title: "A.S. Computer Networking Engineering",
    org: "Tampa Technical Institute",
    description: "Associate degree in networking and systems."
  }
];

export const Timeline = () => (
  <section className="timeline-section" id="timeline">
    <div className="container">
      <h2 className="timeline-title">Experience & Education</h2>
      <div className="timeline-list">
        {timelineData.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-item-title">{item.title}</h3>
              <span className="timeline-org">{item.org}</span>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
); 