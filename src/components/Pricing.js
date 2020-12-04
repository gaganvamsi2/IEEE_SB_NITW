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
                writeup needed for events.
              </p>
            </div>
          </div>
          <div className="row margin-t-50">
            <div className="col-lg-4">
              <div className=" pricing-box hover-effect">
                <h4 className="text-uppercase event-heading text-center">Recruited talks</h4>
                <p><img class=" img-fluid" src="/images/events/event3.jpeg" alt="card image"/></p>
                <div className="plan-features ">
                  <p>
                  Greetings from IEEE SB NITW !
<h5> 1)For the first installment, we have Jovita Varghese - a 3rd year Chemical Engineering undergraduate who's bagged a coveted internship at ITC. </h5>
<h5>2)Click the link to find out more, and don't forget to follow us for updates!</h5>




                  </p>
                </div>
        <div className=" text-center  ">
                <a
                  href="https://drive.google.com/drive/folders/1vjoB-8xeO2OPgiNPOGVgLGIi-vtxQ2kH?usp=sharing" target="_blank"
                  className="btn btn-custom waves-effect waves-light margin-t-30 text-center"
                >
                  Link
                </a>
        </div>
              </div>
            </div>
            <div className="col-lg-4 allignment">
              <div className=" pricing-box hover-effect">
                <h4 className="text-uppercase event-heading text-center">code-hers 1.0</h4>
                <p><img class=" img-fluid" src="/images/events/event2.jpeg" alt="card image"/></p>

                <div className="plan-features ">
                  <p>
                  Greetings from IEEE SB NITW !
<h5> 1) With the onset of a new academic year, IEEE Student Branch NITW has a series of exciting technical and technological events planned for this forthcoming semester. We bring to you our first event for this semester, Code-Hers 1.0, an All India Women's Codeathon. </h5>
<h5>2) Organized by the Women In Engineering department, through this event we hope to encourage more women to rise up and showcase their coding and deciphering skills
.</h5>

                  </p>
                </div>
        <div className=" text-center  ">
                <a
                  href="https://forms.gle/hw4GeiQGFP4cP7T69" target="_blank"
                  className="btn btn-custom waves-effect waves-light text-center "
                >
                  Link
                </a>
              </div>
            </div>
            </div>
            <div className="col-lg-4">
              <div className=" pricing-box hover-effect">
                <h4 className="text-uppercase event-heading text-center">Advanced carrers in management</h4>
                <p><img class=" img-fluid" src="/images/events/event1.jpeg" alt="card image"/></p>
                <div className="plan-features ">
                  <p>
                  Greetings from IEEE SB NITW !
<h5> 1) Making the decision to pursue MBA after engineering and how to prepare for it.</h5>
<h5>2) Description of what life is like at a Business School.</h5>
<h5>3) The opportunities and future prospects of an MBA graduate.</h5>

This is for those of you with questions and doubts related to preparation for CAT/XAT/IIM etc.

                  </p>
                </div>
        <div className=" text-center  ">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeIPdvINxaHPoyKCxBDIFSR8QITcWGEsEerNhAhq9dNAVyR0Q/viewform?usp=pp_url" target="_blank"
                  className="btn btn-custom waves-effect waves-light margin-t-30 text-center"
                >
                  Link
                </a>

              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Pricing;
