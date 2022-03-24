import { useRef } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";

function App() {
  const aboutSection = useRef(null)
  return (
    <div className="App">
      <Navbar ref={aboutSection} />
      <Home />
      <About ref={aboutSection}/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
