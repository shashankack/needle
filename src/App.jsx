import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import NavbarNew from "./components/NavbarNew";
import Loader from "./components/Loader.jsx";

import HomePage from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
      <NavbarNew />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
