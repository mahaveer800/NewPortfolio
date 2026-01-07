import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loaded pages
const Home = lazy(() => import("./Component/Page/Home"));
const Contact = lazy(() => import("./Component/Page/Contact"));
const Skills = lazy(() => import("./Component/Page/SkillsPage"));
const Project = lazy(() => import("./Component/Page/Project"));

const App = () => {
  return (
    <Suspense fallback={<h2>Loading Page...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Suspense>
  );
};

export default App;
