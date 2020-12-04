import React from 'react';

class Testi extends React.Component {
  render() {
    return (
      <section className="section" id="testi">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">What they've said</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                Scientists study the world as it is Engineers create the world that has never been..
              </p>
            </div>
          </div>
          <div className="row margin-t-50">
            <div className="col-lg-4">
              <div className="testimonial-box hover-effect margin-t-30">
                <img
                  src="images/testimonials/1.jpg"
                  alt=""
                  className="img-fluid d-block img-thumbnail rounded-circle"
                />
                <div className="testimonial-decs">
                  <p className="text-muted text-center mb-0">
                    “IEEE is, and remains, strongly committed to diversity, equity, and inclusion and we see no place for hatred and discrimination in our communities.”{' '}
                  </p>
                </div>
                <h5 className="text-center text-uppercase padding-t-15">
                  K. J. Ray Liu -{' '}
                  <span className="text-muted text-capitalize">2021 IEEE President-Elect.</span>
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-box hover-effect margin-t-30">
                <img
                  src="images/testimonials/2.jpeg"
                  alt=""
                  className="img-fluid d-block img-thumbnail rounded-circle"
                />
                <div className="testimonial-decs">
                  <p className="text-muted text-center mb-0">
                    “IEEE has improved me in a lot of ways, not only in my personal growth,” he says. “I’m able to connect with a lot of people around the globe and share what I’ve researched. I attend conferences, publish my papers, and connect with those students who are new to this IEEE world.”{' '}
                  </p>
                </div>
                <h5 className="text-center text-uppercase padding-t-15">
                  Jay Shah -{' '}
                  <span className="text-muted text-capitalize">Secretary  IEEE Dallas Section  </span>
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-box hover-effect margin-t-30">
                <img
                  src="images/testimonials/3.jpg"
                  alt=""
                  className="img-fluid d-block img-thumbnail rounded-circle"
                />
                <div className="testimonial-decs">
                  <p className="text-muted text-center mb-0">
                    “IEEE and our professions are fundamentally about community, and nothing broadens your community like taking on a leadership role.  It will be personally rewarding as you lead efforts to contribute to your professional society. ”{' '}
                  </p>
                </div>
                <h5 className="text-center text-uppercase padding-t-15">
                  Barry Shoop -{' '}
                  <span className="text-muted text-capitalize">2016 IEEE President</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Testi;
