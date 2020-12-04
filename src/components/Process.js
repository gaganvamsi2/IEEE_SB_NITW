/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'react-router-dom';

class Process extends React.Component {
  render() {
    return (
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">IEEE Membership</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
              IEEE members can access information on local events and activities by signing in to IEEE Collabratec®, an integrated multi-functional platform and global network of technology-focused professionals, leveraging IEEE's extensive knowledge base and community of thought-leaders. Once signed in, users can:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center process-left-icon-1">
              <i className="pe-7s-angle-right"></i>
            </div>
            <div className="col-lg-6 text-center process-left-icon-2">
              <i className="pe-7s-angle-right"></i>
            </div>
          </div>
          <div className="row margin-t-50">
            <div className="col-lg-4 plan-line">
              <div className="text-center process-box">
                <i className="pe-7s-pen text-custom"></i>
                <h4 className="padding-t-15">  Join and participate in discussions on various technical interests</h4>

              </div>
            </div>
            <div className="col-lg-4 plan-line">
              <div className="text-center process-box">
                <i className="pe-7s-id text-custom"></i>
                <h4 className="padding-t-15">Establish a professional profile highlighting your accomplishments</h4>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center process-box">
                <i className="pe-7s-target text-custom"></i>
                <h4 className="padding-t-15">Create a group to share and collaborate on projects</h4>

              </div>
            </div>
            <div className="text-center mx-auto">
            <a
              href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join"
                className="btn btn-custom waves-light waves-effect margin-t-50"
              >
                JOIN IEEE <i className="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Process;
