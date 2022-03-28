import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Projects from "./views/Projects";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";




function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <ThemeProvider>
      <>
        {loading === false ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Services />
            <Projects />
            <Contact />
            <div className="w-full bg-black text-white text-lg py-3 flex justify-center ">
              Made with
              <div className="text-red-500 px-2 text-2xl">&#10084;</div>
              by Aakash Sharma
            </div>
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;
