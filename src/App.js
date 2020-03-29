import React from "react"

import "./App.css"

function App() {
  return (
    <div id="outer-container">
      <div className="App">
        <header className="App-header"></header>
        <section className="section-1">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="">
                nt
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbartoggler"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbartoggler">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="mailto:nic@nictacey.com">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#cta">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="">
              <div>
                <h1 className="">
                  Welcome to my personal site, It's a work in progress
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2">
          <div>
            <img
              id="curvy-background"
              src="images/bg-curvy-desktop.svg"
              alt="background-img"
            />
          </div>
        </section>
        <section className="section-3"></section>
      </div>
    </div>
  )
}

export default App
