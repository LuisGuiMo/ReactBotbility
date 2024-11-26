import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="container">
      <header className="head1">
        <img src="https://i.postimg.cc/L4z4bQ5q/Logo-white.png" alt="Logo" style={{ height: '50px' }} />
        <div className="nav-text">Creamos los mejores chatbots, para ti.</div>
        <button className="nav-button">
          <i className="fas fa-volume-up"></i>
        </button>
      </header>
      <div className="content">
        <div className="left-box">
          {/* Contenido de la caja izquierda */}
        </div>
        <div className="right-box">
          <div className="right-box-top">
            {/* Contenido de la parte superior de la caja derecha */}
          </div>
          <div className="right-box-bottom">
            {/* Contenido de la parte inferior de la caja derecha */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App