import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from './components/Header';
import Landing from './pages/Landing';
import Merches from "./pages/Merches";
import SupportUs from "./pages/SupportUs";
import Trends from "./pages/Trends";
import UnderDevelopment from "./pages/UnderDevelopment";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/support" element={<SupportUs />} />
        <Route path="/stories" element={<UnderDevelopment />} />
        <Route path="/twitter" element={<UnderDevelopment />} />
        <Route path="/merches" element={<Merches />} />
        <Route path="*" element={
          <React.Fragment>
            <div className="404-page">
              <div className="404-page-wrapper content-center">
                <div className="hero-section-wrapper" style={{
                  textAlign: 'left',
                  width: 'fit-content',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginTop: '6rem'
                }}>
                  <h1 className="text-lg">
                    You are on a right path but <br /> 
                    on a wrong page.
                  </h1>
                  <Link to="/">
                    <Button>
                      Why stay here? Go to home.
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        } />
      </Routes>
      <Footer />
    </div>
  )
}