import React from 'react';

class Navbar extends React.Component {
  render() {
    return (

  <div class="bs-example">



          <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <img src="images\apple-touch-icon-72x72.png" class="lzy1Td" role="img" aria-label="Site home" jsname="SwcDWb"/>
              <a href="#" class="navbar-brand">IEEE-SB-NITW</a>

              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav">
                      <a href="#" class="nav-item nav-link active">Home</a>
                      <a href="#services" class="nav-item nav-link">Goals</a>
                      <a href="#features" class="nav-item nav-link">IEEE</a>
                      <a href="#team" class="nav-item nav-link">TEAM</a>
                      <a href="#pricing" class="nav-item nav-link">EVENTS</a>
                      <a href="#contact" class="nav-item nav-link disabled" tabindex="-1">CONTACT</a>
                  </div>
                  <div class="navbar-nav ml-auto">

                  </div>
              </div>
          </nav>
      </div>

/*
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
        <div className="container">
          <a href="/home">
            <img className="logo" src="images/favicon.ico" alt="logo"></img>
            <br></br>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-center" id="mySidenav">
              <li className="nav-item active">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#goals" className="nav-link">
                  Goals
                </a>
              </li>
              <li className="nav-item">
                <a href="#IEEE" className="nav-link">
                  IEEE
                </a>
              </li>
              <li className="nav-item">
                <a href="#events" className="nav-link">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#news" className="nav-link">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="nav-button ml-auto">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button
                    href="#contact"
                    type="button"
                    className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light nav-link"
                  >
                    <a style={{ color: '#ffffff' }} href="#contact">
                      Jump in
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>*/

    );
  }
}

export default Navbar;
