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
              As the world's largest technical professional organization, IEEE offers a number of ways to get involved with technical and local communities. These communities are active participants in research and authorship, conferences, and important conversations about today's most relevant technical topics locally and globally.
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-phone text-custom"></i>
                <h4 className="padding-t-15">Build connections with other technical professionals</h4>

              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-monitor text-custom"></i>
                <h4 className="padding-t-15">Build a professional profile expounding your achievements</h4>

              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-graph2 text-custom"></i>
                <h4 className="padding-t-15">Enable participation in the discussion of various technical matters</h4>

              </div>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-like text-custom"></i>
                <h4 className="padding-t-15">Create groups to collaborate on projects</h4>

              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-mouse text-custom"></i>
                <h4 className="padding-t-15">Discover IEEE events and activities throughout the world</h4>

              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-shopbag text-custom"></i>
                <h4 className="padding-t-15">Enable contact between potential employers and job seekers </h4>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
