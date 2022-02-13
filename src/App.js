import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from './components/Header';
import Landing from './pages/Landing';
import SupportUs from "./pages/SupportUs";
import Trends from "./pages/Trends";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/support" element={<SupportUs />} />
      </Routes>
      <Footer />
    </div>
  )
}