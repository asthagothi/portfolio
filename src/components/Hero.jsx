import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <p className="hero-intro">Hi, I am</p>

      <h1>Astha Gothi</h1>

      <h2>Software Engineer</h2>

      <p className="hero-tech">Python • Django • React • SQL</p>

      <p className="hero-description">
        I build clean, responsive web applications and solve real-world problems
        through code.
      </p>

      <div className="hero-buttons">
  <a href="#projects" className="hero-btn">
    View Projects
  </a>

  <a href="/AsthaGothi-resume.pdf" className="hero-btn secondary">
    Download Resume
  </a>
</div>

      <div className="hero-socials">
  <a
    href="https://github.com/asthagothi"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/astha-gothi"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
</div>
    </section>
  );
}

export default Hero;