import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
  render() {
    return (
      <section className="section bg-light pt-5" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">News</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                What's happening at IEEE
              </p>
            </div>
          </div>

          <div className="row margin-t-30">
            <div className="col-lg-4">
              <div className="blog-box margin-t-30 hover-effect">
                <img src="images/news/1.jpg" className="img-fluid" alt="" />
                <div>
                  <h5 className="mt-4 text-muted">IEEE Annual Election</h5>

                  <p className="mt-3 newsbold">
                    IEEE Fellow K. J. Ray Liu was elected as the 2021 IEEE President-Elect.
                  </p>
                  <div className="mt-3">
                    <a className="mdi mdi-arrow-right read-btn" href="https://www.ieee.org/about/corporate/election/index.html?utm_source=whatshappening_text&utm_medium=hp&utm_campaign=ieee-election-2020">
                      Read More </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog-box margin-t-30 hover-effect">
                <img src="images/news/2.jpg" className="img-fluid" alt="" />
                <div>
                  <h5 className="mt-4 text-muted">Bridging the 4G/5G Gap</h5>

                  <p className="mt-3 newsbold">
                    Wireless technologies have become a fundamental part of daily life in the 21st century. Join IEEE on 12 November at 1 p.m. ET (18:00 UTC-05) to understand the effects cellular networks have on society and commerce. IEEE members can save US$20.
                  </p>
                  <div className="mt-3">
                    <a className="mdi mdi-arrow-right read-btn" href="https://iln.ieee.org/Public/ContentDetails.aspx?id=953BE2BC603B418EA2693A1A37B89F35&utm_source=ieee&utm_medium=site&utm_campaign=5Gvenov2020?utm_source=whatshappening_text&utm_medium=hp&utm_campaign=virtual-4g5g&_ga=2.172530275.1993286808.1605106582-2066660497.1597035658">
                      Read More </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog-box margin-t-30 hover-effect">
                <img src="images/news/3.jpg" className="img-fluid" alt="" />
                <div>
                  <h5 className="mt-4 text-muted">Societies</h5>

                  <p className="mt-3 newsbold">
                    Society memberships enable you to stay current within your technology profession, keep in touch with peers, and invest in your career.
                  </p>
                  <div className="mt-3">
                    <a className="mdi mdi-arrow-right read-btn" href="https://www.ieee.org/communities/societies/index.html?utm_source=whatshappening_text&utm_medium=hp&utm_campaign=societies">
                      Read More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Blog;
