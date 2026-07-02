function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Aeraaa</h2>

      <div className="nav-links">
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;