import React from 'react'
import { Link ,Router } from "react-router-dom";
export default function Header() {
    return (
      <div className="container">
        <div className="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home">
              Album
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/home">
                    Home <span></span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/collections">
                    Collection
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/upload">
                    Own gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gallery">
                    Gallery
                  </a>

                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    contact us
                  </a>

                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
}
