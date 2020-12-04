/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  'images/online-world.svg',
  'images/uxuiDesign.png',
  'images/mobile-app-development.png',
  'images/appdevelopment.png'
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

// const zoomOutProperties = {
//   duration: 3000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   scale: 0.9,
//   arrows: true
// };

class Features extends React.Component {
  render() {
    return (
      <section className="section bg-light" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">IEEE</h1>
              <div className="section-title-border margin-t-20"></div>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-lg-5">
              <div className="features-box">
                <h3>
                IEEE fosters technological innovation and excellence for the benefit of humanity.
                </h3>
                <p className="text-muted web-desc">
                  IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
                </p>
                <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                  <li className="">
                    Drive global innovation through broad collaboration and the sharing of knowledge
                  </li>
                  <li className="">
                  Enhance public understanding of engineering and technology and pursue standards for their practical application
                  </li>
                  <li className="">
                  Be a trusted source of educational services and resources to support life-long learning
                  </li>
                  <li className="">
                  Provide opportunities for career and professional development
                  </li>
                  <li className="">
                    Inspire a worldwide audience by building communities that advance technical interests, inform public policy, and expand knowledge for the benefit of humanity
                  </li>
                </ul>
                <a href={'https://www.ieee.org/'}
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Jump in <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img features-right text-right">
                <div className="slide-container slider1">
                  <Fade {...fadeProperties}>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[0]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[1]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[2]} />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="image-container">
                        <img src={fadeImages[3]} />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;
