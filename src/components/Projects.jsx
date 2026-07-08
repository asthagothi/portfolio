function Projects() {
  const projects = [
    {
      title: "Restaurant Booking System",
      tech: "Python • Django • SQL",
      description:
        "A web application that allows customers to reserve restaurant tables online.",
      github: "https://github.com/YOUR_USERNAME/restaurant-booking",
      demo: "#",
    },
    {
      title: "Personal Portfolio",
      tech: "React • CSS • JavaScript",
      description:
        "A modern responsive portfolio website to showcase my work and skills.",
      github: "https://github.com/YOUR_USERNAME/portfolio",
      demo: "#",
    },
    {
      title: "Task Manager",
      tech: "React • Django • REST API",
      description:
        "A task management application with authentication and CRUD functionality.",
      github: "https://github.com/asthagothi",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <p className="section-label">My Work</p>

      <h2>Featured Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p className="tech">{project.tech}</p>

            <p>{project.description}</p>

            <div className="project-buttons">
              <button onClick={() => window.open(project.github, "_blank")}>
                GitHub
              </button>

              <button
                onClick={() => {
                  if (project.demo === "https://portfolio-astha-gothi-007.vercel.app/") {
                    alert("Live demo coming soon!");
                  } else {
                    window.open(project.demo, "_blank");
                  }
                }}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;