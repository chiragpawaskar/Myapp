import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeedbackButton from "./components/FeedbackButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Encatch feedback button — floats on every page */}
      <FeedbackButton formId="ba6fd20d-ec32-48fe-a936-ad77c34ab3ab" />
    </Router>
  );
}

export default App;
