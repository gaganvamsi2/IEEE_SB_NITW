import React from 'react';
import Typing from 'react-typing-animation';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Features from './components/Features';
import Descriptions from './components/Descriptions';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Process from './components/Process';
import Testi from './components/Testi';
import Started from './components/Started';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import Blog from './components/Blog';
import Switcher from './components/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';
import StarfieldAnimation from 'react-starfield-animation';

class Home extends React.Component {
  render() {
    var bkg1 = {
      backgroundImage: 'url(images/wave-shape/wave1.png)'
    };
    var bkg2 = {
      backgroundImage: 'url(images/wave-shape/wave2.png)'
    };
    var bkg3 = {
      backgroundImage: 'url(images/wave-shape/wave3.png)'
    };

    return (
      <Aux>
        {/* Navbar Component*/}
        <Navbar />

        <div bg-home>\

          <StarfieldAnimation
            numParticles={1000}
            depth={1}
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh'
            }}
          />
        </div>

    <section className="section bg-home home-half" id="home">


          <div className="bg-overlay"/>

          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-white text-center ">
                 <img class="home-icon fade  " src="/images/home/Group 2.png"/>


                    <p className="padding-t-15 home-desc ">
                      You have the next great idea to present to the world. Explore the world through IEEE
                      <br />
                      <br />
                        <br />
                          <br />
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div className="wave wave-one" style={bkg1}/>
            </div>
            <div className="waves-shape shape-two">
              <div className="wave wave-two" style={bkg2}/>
            </div>
            <div className="waves-shape shape-three">
              <div className="wave wave-three" style={bkg3}/>
            </div>
          </div>
        </section>

        {/* Services Component*/}
        <Services />

        {/* Features Component*/}
        <Features />

        {/* Descriptions Component*/}
        <Descriptions />

        {/* Pricing Component*/}
        <Pricing />

        {/* Blog Component*/}
        <Blog />


        {/* Team Component*/}
        <Team />



        {/* Testi Component*/}
        <Testi />



        {/* Started Component*/}
        <Started />

        {/* Process Component*/}
        <Process />

        {/* Contact Component*/}
        <Contact />

        {/* SocialMedia Component*/}
        <SocialMedia />

        {/* Footer Component*/}
        <Footer />

        {/* FooterLinks Component*/}
        <FooterLinks />

        {/* Switcher Component*/}

      </Aux>
    );
  }
}


export default Home;
