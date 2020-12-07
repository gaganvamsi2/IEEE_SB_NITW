import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">CONTACT US</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be supported with
                measurable results.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">Office Address 1:</span>
                  <br />{' '}
                  <span className="text-muted d-block mt-2">
                    NIT Warangal
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Office Address 2:</span>
                  <br />{' '}
                  <span className="text-muted d-block mt-2">
                    Innovation Garage
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br />{' '}
                  <span className="text-muted d-block mt-2">
                    9:00AM To 6:00PM
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="custom-form mt-4 pt-4">
                <div id="message">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfL0M4q_1MfIAyakT33XvVNpfKRjRe3B9zzcIp5wCbOOQNbrg/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
