import Navbar from "./Component/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Skill from "./Pages/Skills/Skill";
import Footer from "./Component/Footer"
import { useEffect } from "react";


function App() {
  useEffect(() => {
    // Scroll to the top of the page on reload
    window.scrollTo(0, 0);
  }, []);
  return (
      <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      </>
  );
}

export default App;
