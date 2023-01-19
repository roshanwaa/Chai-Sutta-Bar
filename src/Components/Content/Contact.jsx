/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react';

import classes from './CSS/Contact.module.css';
import { ContactForm } from './Assets/FormContact/ContactForm';

export const Contact = () => {
  return (
    <div className="view-layout" id={classes.contact}>
      <div className={classes.contact_container}>
        <div className={classes.heading}>
          <i
            className={`"uil uil-message nav__icon"  ${classes.icon_contact}`}
          ></i>
          <h2 className="title">
            Contact <span> Us </span>
          </h2>
        </div>
      </div>
      <div className="box-placeholder">
        <h3 className={classes.contact__para}>
          <i className="fa-solid fa-location-arrow"></i> We Welcome you all to
          visit
          <br />
          Arya Kumar road ,Rajendra Nagar, Patna - 800016
        </h3>
      </div>
      <div className="box-placeholder">
        <div className={classes['contact-map']}>
          <iframe
            className={classes['contact-mymap']}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.884270409675!2d85.15667848714037!3d25.608761597257356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed599e9bbb97af%3A0x4f9670738e5cfbab!2sCHAI%20SUTTA%20BAR%2C%20Rajendra%20Nagar%20(Cuddle%20the%20kulhad)!5e0!3m2!1sen!2sin!4v1673725921721!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="title">
        <ul className={classes.wrapper}>
          <li className={`${classes.facebook} ${classes.icon}`}>
            <a className={classes.tooltip}>Facebook</a>
            <a
              href="https://www.facebook.com/CSB.RajendraNagar/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>

          <li className={`${classes.instagram} ${classes.icon}`}>
            <a className={classes.tooltip}>Instagram</a>
            <a
              href="https://instagram.com/csb_rajendranagar?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li className={`${classes.map} ${classes.icon}`}>
            <a className={classes.tooltip}>Map</a>
            <a href="https://goo.gl/maps/n9wMHremz8yMdJK86" target="_blank">
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </li>

          <li className={`${classes.whatApp} ${classes.icon}`}>
            <a className={classes.tooltip}>WhatApp</a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B919097355476&fbclid=IwAR10Xhggn19v_jVAuybsvcpHW2KDS1X-DHfY0TX_NCXAgZ0a5rOQynuIG3o"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li className={`${classes.zomato} ${classes.icon}`}>
            <a className={classes.tooltip}>Zomato</a>
            <a href="http://zoma.to/r/20090402" target="_blank">
              <i className="fa-solid fa-bowl-food"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="box-placeholder">
        <ContactForm />
      </div>
    </div>
  );
};
