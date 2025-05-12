import React, { useEffect, useRef, useState } from "react";

const skillsData = [
  { name: "C#", level: 95 },
  { name: "ASP.NET Core", level: 92 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "React.js", level: 93 },
  { name: "Angular", level: 88 },
  { name: "Node.js", level: 90 },
  { name: ".NET Core (C#, MVC, Razor)", level: 92 },
  { name: "SQL (Dapper, Indexing, Triggers)", level: 87 },
  { name: "UI Control Libraries", level: 80 },
  { name: "Kendo UI", level: 78 },
  { name: "Telerik", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "HTML/CSS/Bootstrap", level: 95 },
  { name: "jQuery", level: 85 },
  { name: "Backbone.js", level: 70 },
  { name: "knockout.js", level: 80 },
  { name: "Dynamic 365", level: 65 },
  { name: "Multithreading", level: 80 },
];

const groupSkills = (skills, size) => {
  const groups = [];
  for (let i = 0; i < skills.length; i += size) {
    groups.push(skills.slice(i, i + size));
  }
  return groups;
};

export const Skills = () => {
  const [current, setCurrent] = useState(0);
  const groups = groupSkills(skillsData, 5);
  const barsRef = useRef([]);
  const autoSlideRef = useRef();

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        bar.style.width = groups[current][i]?.level + "%";
      }
    });
  }, [current, groups]);

  // Auto-slide effect
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev === groups.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(autoSlideRef.current);
  }, [groups.length]);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {groups[current].map((skill, i) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar"
                  ref={el => (barsRef.current[i] = el)}
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicator">
          {groups.map((_, idx) => (
            <span
              key={idx}
              className={idx === current ? "active" : ""}
              onClick={() => setCurrent(idx)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}; 