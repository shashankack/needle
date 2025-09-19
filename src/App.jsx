import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader.jsx";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
