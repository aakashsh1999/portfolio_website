import {  useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>

  );
}

export default App;
