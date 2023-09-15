import React from 'react';
import './Header.css';

const Header = () => {
return (
<header>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="logo-container">
        <img src="/src/assets/Images/icons8-sprinkler-64.png" alt="Logo da AquaFlora" className="logo-img my-1" />
        <a className="navbar-brand logo-menu" href="">Aqua Flora</a>
      </div>
      <button className="navbar-toggler ml-auto btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="bi bi-list"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Sobre nós</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projeto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contato</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Projeto IBM</a>
            <ul className="dropdown-menu custom-dropdown">
              <li><a className="dropdown-item" href="#">Problema</a></li>
              <li><a className="dropdown-item" href="#">Impacto</a></li>
              <li><a className="dropdown-item" href="#">Áreas verdes</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
);
}

export default Header;