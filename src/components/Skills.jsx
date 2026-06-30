function Skills() {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "SQL",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;