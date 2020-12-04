/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

class Started extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h1 className="get-started-title text-white">
                Let's Get Started
              </h1>
              <div className="section-title-border margin-t-20 bg-white"></div>
              <p className="section-subtitle font-secondary text-white text-center padding-t-30">
              As the world's largest technical professional organization, IEEE offers a number of ways to get involved with technical and local communities. These communities are active participants in research and authorship, conferences, and important conversations about today's most relevant technical topics locally and globally.{' '}
              </p>
              <a className="btn btn-bg-white waves-effect margin-t-20 mb-4"
                href="https://www.ieee.org/communities/index.html"

              >
              Let's  Explore
              </a>
            </div>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img src="images/bg-pattern-light.png" alt="" />
        </div>
      </section>
    );
  }
}
export default Started;
