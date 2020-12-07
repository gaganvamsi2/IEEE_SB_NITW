/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 margin-t-20">
              <h4>IEEE-SB NITW</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                     <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#team">About us</a>
                  </li>
                  <li>
                    <a href="#pricing">Events</a>
                  </li>
                  <li>
                    <a href="#contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Information</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <a href="https://www.ieee.org/about/help/site-terms-conditions.html">terms and conditions</a>
                  </li>
                  <li>
                    <a href="#team">About us</a>
                  </li>
                  <li>
                    <a href="#services">Our Goals</a>
                  </li>
                  <li>
                    <a href="https://www.ieee.org/conferences/index.html">IEEE conferences</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Support</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <a href="#blog">IEEE news room</a>
                  </li>
                  <li>
                    <a href="mailto:nitw.ieee@gmail.com">contact</a>
                  </li>
                  <li>
                  <a href="https://www.ieee.org/communities/societies/index.html">Disscusion</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Feedback</h4>
              <div className="text-muted margin-t-20">
                <p>
                  Feedback is a gift. Ideas are the currency of our next success. Let
people see you value both feedback and ideas.
                </p>
              </div>
              <a style={{color: "white"}}  href="mailto:nitw.ieee@gmail.com">Mail us</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
