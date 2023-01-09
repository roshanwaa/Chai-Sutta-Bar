import React from 'react';
import { SlCard } from 'https://cdn.skypack.dev/@shoelace-style/shoelace@2.0.0-beta.60/dist/react';

import './home.css';

export const Home = () => {
  return (
    <div className="view-layout">
      <h2 className="title">
        At <br /> Chai Sutta Bar
      </h2>

      <h2>What We Strive for...</h2>
      <div className="box-placeholder">
        <p>
          CSB Rajendra Nagar provides a soothing counterpoint to the stresses of
          urban living. At Chai Sutta Bar, our service is always centered around
          people. We believe and understand that the whole being of humankind
          depends on the food they consume. Providing affordable, reliable food
          that is connected to their culture and ethos. In our Kulhad chai, we
          strive to make everyone taste the soil of India, a medium of
          connection between friends, families, and strangers. Even so, we offer
          so much more than kulhad chai. At chai sutta bar Rajendra nagar we the
          people of M.A.D venture Pvt. ltd. always try to implement the thoughts
          of the leadership of CHAI SUTTA BAR.
        </p>
      </div>
      <div className="box-placeholder">
        <div className="usp">
          <div className="head-usp">
            <h2>Our USP's</h2>
            <h4>Brewing Goodness</h4>
          </div>
          <div className="content-usp">
            <SlCard className="box-placeholder-usp small">
              <h3>Great Ambience</h3>
              <p>We aim to serve tea in a non-smoking bar-like setting.</p>
            </SlCard>
            <div className="box-placeholder-usp">
              <h3>Pocket-Friendly</h3>
              <p>
                Everyone loves chai and giving them the option to afford a
                kulhad chai, makes us happy all the time.
              </p>
            </div>
            <div className="box-placeholder-usp">
              <h3>Made with love menu</h3>
              <p>
                Our menu has varieties of most loved food item's and beverages
                that satiate both taste and appetite.
              </p>
            </div>
            <div className="box-placeholder-usp">
              <h3>Eco-Friendly</h3>
              <p>
                we serve our beverages in kulhad which are much more
                eco-friendly than plastics or other alternatives.
              </p>
            </div>
            <div className="box-placeholder-usp">
              <h3>Orphan Employment</h3>
              <p>
                We believe in serving society by allowing bringing the potential
                of the less fortunate in front of the world.
              </p>
            </div>
            <div className="box-placeholder-usp">
              <h3>No-Smoking</h3>
              <p>
                We aim to provide people, especially the youth to enjoy
                eco-friendly 'kulhad chai breaks' rather than ' sutta breaks'.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
