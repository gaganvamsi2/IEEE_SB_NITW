/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
    return (
      <section className="cta bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline social margin-t-20">
                <li className="list-inline-item">
                  <a className="social-icon" href="https://www.facebook.com/IEEESBNITW/">
                    <i className="mdi mdi-facebook"></i>
                </a>
                </li>

                <li className="list-inline-item">
                  <a className="social-icon" href="https://in.linkedin.com/company/ieee-student-branch-nitw">
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="social-icon" href="mailto:nitw.ieee@gmail.com">
                    <i className="mdi mdi-google-plus"></i>
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-3 margin-t-30">
              <p className="margin-b-0 contact-title">
                <a href="tel:+91 9121925310">9121925310</a>
              </p>
            </div>
            <div className="col-lg-3 margin-t-30 text-right">
              <p className="contact-title">
                <i className="pe-7s-mail-open"></i>&nbsp; nitw.ieee@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SocialMedia;
