import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Showcase from "./views/Showcase";
import Stats from "./views/Stats";
import Process from "./views/Process";
import Marquee from "./components/Marquee";
import BigCTA from "./components/BigCTA";
import Preloader from "./components/Preloader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import { SetupAnimation } from "./helium-animation/react";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [ready, setReady] = useState(false);
  const onPreloaderDone = useCallback(() => setReady(true), []);

  return (
    <ThemeProvider>
      <div className={`app-shell ${ready ? "is-ready" : ""}`}>
        {!ready && <Preloader onDone={onPreloaderDone} />}
        {ready && (
          <>
            <CustomCursor />
            <ScrollProgress />
            <div className="grain" aria-hidden="true" />

            <div className="site-content">
              <SmoothScroll />
              <SetupAnimation />
              <Navbar />
              <Home />
              <Marquee />
              <Projects />
              <Showcase />
              <Stats />
              <Experience />
              <Process />
              <About />
              <BigCTA />
              <Contact />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
