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
                Explore IEEE
              </h2>
              <p className="padding-t-15 home-desc text-grey">
                <br/> Whether you’re looking to build a professional profile to bolster your resumé, or acquaint yourself with the people who can help you do so, you’ve come to the right place. This space is your one-stop shop to help you accomplish all of that, and more. Keep reading to find out.
                 <br/>
                 <br/><br/><br/>
              </p>

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
