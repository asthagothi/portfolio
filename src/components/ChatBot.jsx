import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I’m Astha’s portfolio assistant. Ask me about her skills, projects, resume, or contact details.",
    },
  ]);

  const [input, setInput] = useState("");

  const getBotReply = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("who") ||
      message.includes("about") ||
      message.includes("introduce") ||
      message.includes("tell me about astha")
    ) {
      return "Astha Gothi is a Computer Science graduate and aspiring Software Engineer. She is interested in building clean, responsive, and user-friendly web applications using technologies like React, Python, Django, JavaScript, SQL, HTML, and CSS.";
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech stack") ||
      message.includes("tools") ||
      message.includes("language")
    ) {
      return "Astha's technical skills include Python, Django, React, JavaScript, SQL, HTML, CSS, Git, and GitHub. She has also worked with responsive web design and frontend project structure.";
    }

    if (message.includes("restaurant") || message.includes("booking")) {
      return "The Restaurant Booking System is a web application that allows users to view restaurants and book tables. It was built using Python, Django, and SQL.";
    }

    if (message.includes("task manager") || message.includes("task")) {
      return "The Task Manager project is designed to manage tasks with basic CRUD functionality. It represents Astha's understanding of application structure, data handling, and user interaction.";
    }

    if (
      message.includes("project") ||
      message.includes("work") ||
      message.includes("built") ||
      message.includes("portfolio")
    ) {
      return "Astha has worked on projects such as a Restaurant Booking System, a Personal Portfolio Website, and a Task Manager. Her portfolio website showcases her skills, projects, resume, and contact details.";
    }

    if (message.includes("resume") || message.includes("cv")) {
      return "You can download Astha's resume by clicking the Download Resume button in the Hero section of this portfolio website.";
    }

    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach")
    ) {
      return "You can contact Astha through email at gothiastha077@gmail.com. You can also connect with her through GitHub and LinkedIn links available on this portfolio.";
    }

    if (message.includes("github") || message.includes("code")) {
      return "Astha's GitHub profile is available through the GitHub icon and project buttons on this website. It contains her portfolio code and project work.";
    }

    if (message.includes("linkedin")) {
      return "Astha's LinkedIn profile is linked on this website. Recruiters can connect with her there for professional opportunities.";
    }

    if (
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("college")
    ) {
      return "Astha is a Computer Science graduate. Her background in computer science supports her interest in software development and web application building.";
    }

    if (
      message.includes("job") ||
      message.includes("opportunity") ||
      message.includes("hire") ||
      message.includes("available") ||
      message.includes("role")
    ) {
      return "Astha is currently open to software engineering, frontend, backend, and full-stack development opportunities where she can learn, contribute, and grow professionally.";
    }

    if (message.includes("frontend") || message.includes("react")) {
      return "Astha has worked with React, JavaScript, HTML, and CSS to build responsive user interfaces. This portfolio website itself is built using React and CSS.";
    }

    if (
      message.includes("backend") ||
      message.includes("django") ||
      message.includes("python")
    ) {
      return "Astha has experience working with Python and Django for backend development and web application logic.";
    }

    if (message.includes("database") || message.includes("sql")) {
      return "Astha has worked with SQL and understands basic database concepts used in web applications.";
    }

    if (
      message.includes("deploy") ||
      message.includes("vercel") ||
      message.includes("live")
    ) {
      return "This portfolio website is deployed live using Vercel and the code is managed through GitHub.";
    }

    if (
      message.includes("created") ||
      message.includes("made") ||
      message.includes("developed")
    ) {
      return "This portfolio was designed and developed by Astha Gothi using React, CSS, GitHub, and Vercel.";
    }

    if (message.includes("strength") || message.includes("good at")) {
      return "Astha's strengths include learning consistently, building clean user interfaces, understanding project structure, and improving through practical projects.";
    }

    if (
      message.includes("why should we hire") ||
      message.includes("why hire")
    ) {
      return "Astha is a motivated Computer Science graduate with practical project experience, a strong willingness to learn, and interest in building useful digital products. She is looking for an opportunity to contribute and grow as a software professional.";
    }

    return "I can answer questions about Astha's skills, projects, resume, education, contact details, GitHub, LinkedIn, and this portfolio website.";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>Aeraaa Assistant</h3>
            <p>Ask about Astha’s portfolio</p>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                className={
                  message.sender === "bot" ? "bot-message" : "user-message"
                }
                key={index}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;