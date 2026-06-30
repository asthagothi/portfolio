import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h2>Let’s get in touch</h2>

        <p>
          I’m open to software engineering opportunities, internships, and
          full-stack development roles.
        </p>
      </div>

      <div className="contact-right">
        <a href="mailto:gothiastha077@gmail.com">
          <FaEnvelope />
          gothiastha077@gmail.com
        </a>

        <a
          href="https://github.com/asthagothi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="YOUR_LINKEDIN_LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <p>
          <FaMapMarkerAlt />
          India
        </p>
      </div>
    </section>
  );
}

export default Contact;