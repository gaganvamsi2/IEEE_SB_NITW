import React from 'react';

class FooterLinks extends React.Component {
  render() {
    return (
      <div className="footer-alt">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 text-center">
              <div className="float-left pull-none ">
                <p className="copy-rights text-muted" align="center">
                  {new Date().getFullYear()} © IEEE-SB NITW
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterLinks;
