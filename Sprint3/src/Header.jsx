import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand logo-menu" href="#">AquaFlora</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projeto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contato</a>
                    </li>
                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projeto IBM
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Problema</a></li>
            <li><a class="dropdown-item" href="#">Areas verdes</a></li>
            <li><a class="dropdown-item" href="#">Impacto</a></li>
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
