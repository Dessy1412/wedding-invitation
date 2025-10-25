import "./styles/theme.css";
import "./styles/components.css";
import "./styles/utilities.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import Animations from "./components/Animations/Animations";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <>
      <div className="min-h-screen py-5 bg-primary">
        <Navbar />
        <Home />
        <Animations />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Animations />
        <Certifications />
      </div>

      <section
        id="home"
        className="h-screen bg-gray-100 flex items-center justify-center"
      >
        {/* <h1 className="text-4xl font-bold">Home Section</h1> */}
      </section>
    </>
  );
}

export default App;
