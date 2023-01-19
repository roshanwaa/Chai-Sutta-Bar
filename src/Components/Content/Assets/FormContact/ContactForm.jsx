import React from 'react';
import { Form } from './Form';
import classes from '../../CSS/ContactForm.module.css';

export const ContactForm = () => {
  return (
    <>
      <div className={classes.title}>
        <h1>Contact Detail</h1>
        <i className="fa-solid fa-location-arrow"> </i>
        <p>
          Address: 149/B, Chandra Kutir,
          <br />
          Arya Kumar road ,Rajendra Nagar, Patna 800016
        </p>
      </div>

      <div className={classes.contact}>
        <div className={classes.formInfo}>
          {/* <!----------------- Info-1 -----------------> */}
          <div className={classes.info}>
            <i className="fa-solid fa-phone" />
            <h3 className={classes.info__title}>
              +91 90973 55476,
              <br />
              +91 98528 84558
            </h3>
          </div>

          {/* <!----------------- Info-2 -----------------> */}
          <div className={classes.info}>
            <i className="fa-solid fa-at" />
            <h3 className={classes.info__title}>
              amankumarsingh0866@gmail.com
            </h3>
          </div>
          {/* <!----------------- Info-3 -----------------> */}

          <div className={classes.info}>
            <i className="fa-brands fa-instagram"></i>
            <h3 className={classes.info__title}>
              <a href="https://www.instagram.com/csb_rajendranagar/?igshid=YmMyMTA2M2Y%3D">
                csb_rajendranagar
              </a>
            </h3>
          </div>
        </div>
        <div className={classes.contactForm}>
          <Form />
        </div>
      </div>
    </>
  );
};
