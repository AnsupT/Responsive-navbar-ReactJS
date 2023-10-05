import React from 'react';
import Navbar from "./Components/Navbar";
import "./Styles/main.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Buscar from "./Pages/Buscar"; 
import Certificado from "./Pages/Certificado"; 
import About from "./Pages/About";  
import Footer from "./Components/Footer";

import "./Styles/Footer.css";

function App() {
	return (
	
		<div className="app-container">
      <Navbar /> {/* Navbar arriba */}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Buscar" element={<Buscar />} />
          <Route path="Certificado" element={<Certificado />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      
      <Footer /> {/* Footer abajo */}
    </div>
	  
	 
	);
}

export default App;
