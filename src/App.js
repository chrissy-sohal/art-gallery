import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navbar';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {
  HashRouter,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <HashRouter>
      <div className="home">
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;