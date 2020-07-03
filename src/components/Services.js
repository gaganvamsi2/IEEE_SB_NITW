import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Our Goal</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                Some writeup needed here
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-phone text-custom"></i>
                <h4 className="padding-t-15">Goal1</h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-monitor text-custom"></i>
                <h4 className="padding-t-15">Goal 2</h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-graph2 text-custom"></i>
                <h4 className="padding-t-15">Goal3</h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-like text-custom"></i>
                <h4 className="padding-t-15">Goal4</h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-mouse text-custom"></i>
                <h4 className="padding-t-15">Goal5</h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-shopbag text-custom"></i>
                <h4 className="padding-t-15">Goal6 </h4>
                <p className="padding-t-15 text-muted">
                  Some writeup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
