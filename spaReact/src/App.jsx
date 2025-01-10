import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Persona } from '../componentes/Persona'
import { Routes, Route } from 'react-router-dom';

function App() {
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MiApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Acerca de</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>

  return (
    <div>
    <Persona nombre="Alvaro" edad="42" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZSUFMbmvp0SjVlVb-_oCB0Tem-uUZ6GyWA&s"/>

    <Persona nombre="Juan" edad="10" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bw3K1SWXx9jGPIlPoAzVtPnPpuKlc2OfzQ&s"/>      
    </div>

  )
}

export default App
