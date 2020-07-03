/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

class Pricing extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Events</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle font-secondary text-muted text-center padding-t-30">
                Some blah blah writeup for events.
              </p>
            </div>
          </div>
          <div className="row margin-t-50">
            <div className="col-lg-4">
              <div className="text-center pricing-box hover-effect">
                <h4 className="text-uppercase">Project1</h4>
                <h1>something</h1>
                <h6 className="text-uppercase text-muted">Blah blah</h6>
                <div className="pricing-border"></div>
                <div className="plan-features margin-t-30">
                  <p>
                    date: <b className="text-custom">some date</b>
                  </p>
                  <p>
                    Field: <b className="text-custom">info</b>
                  </p>
                  <p>
                    Some other things: <b className="text-custom">info</b>
                  </p>
                  <p>
                    <b className="text-custom">1</b> info
                  </p>
                  <p>
                    <b className="text-custom">No</b> info
                  </p>
                </div>
                <Link
                  to="JavaScript:Void(0);"
                  className="btn btn-custom waves-effect waves-light margin-t-30"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center pricing-box hover-effect">
                <h4 className="text-uppercase">Project1</h4>
                <h1>something</h1>
                <h6 className="text-uppercase text-muted">Blah blah</h6>
                <div className="pricing-border"></div>
                <div className="plan-features margin-t-30">
                  <p>
                    date: <b className="text-custom">some date</b>
                  </p>
                  <p>
                    Field: <b className="text-custom">info</b>
                  </p>
                  <p>
                    Some other things: <b className="text-custom">info</b>
                  </p>
                  <p>
                    <b className="text-custom">1</b> info
                  </p>
                  <p>
                    <b className="text-custom">No</b> info
                  </p>
                </div>
                <Link
                  to="JavaScript:Void(0);"
                  className="btn btn-custom waves-effect waves-light margin-t-30"
                >
                  Details
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center pricing-box hover-effect">
                <h4 className="text-uppercase">Project1</h4>
                <h1>something</h1>
                <h6 className="text-uppercase text-muted">Blah blah</h6>
                <div className="pricing-border"></div>
                <div className="plan-features margin-t-30">
                  <p>
                    date: <b className="text-custom">some date</b>
                  </p>
                  <p>
                    Field: <b className="text-custom">info</b>
                  </p>
                  <p>
                    Some other things: <b className="text-custom">info</b>
                  </p>
                  <p>
                    <b className="text-custom">1</b> info
                  </p>
                  <p>
                    <b className="text-custom">No</b> info
                  </p>
                </div>
                <Link
                  to="JavaScript:Void(0);"
                  className="btn btn-custom waves-effect waves-light margin-t-30"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Pricing;
