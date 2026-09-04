import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
      <Analytics />
    </>
  );
}

export default App;
