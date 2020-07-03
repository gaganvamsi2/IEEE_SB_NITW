/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

class Descriptions extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-web-desc">
        <Confetti height={'450px'} />
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-white">
                Explore IEEE & and some writeup
              </h2>
              <p className="padding-t-15 home-desc">
                Joining writeup
              </p>
              <Link
                to="SignUp"
                className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img src="images/bg-pattern.png" alt="" />
        </div>
      </section>
    );
  }
}
export default Descriptions;
