import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Project from "./pages/Project";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Project1Details from "./components/projects/ProjectDetailsPage/Project1Details";
import Footer from "./components/common/Footer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  const location = useLocation(null);
  return (
    <>
      <div>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/projects" element={<Project />} />
          {/* Yahan pe nested route add kar */}
          <Route path="/projects/:id" element={<Project1Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {location.pathname !== "/" && <Footer />}
      </div>
    </>
  );
};
export default App;
