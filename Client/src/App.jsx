import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navbar />}>
          <Route
            path=""
            element={
              <PageWrapper>
                <Homepage />
              </PageWrapper>
            }
          />
          <Route
            path="about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="projects"
            element={
              <PageWrapper>
                <Projects />
              </PageWrapper>
            }
          />
          <Route
            path="resume"
            element={
              <PageWrapper>
                <Resume />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
