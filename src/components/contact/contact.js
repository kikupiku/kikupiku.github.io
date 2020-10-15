import React from 'react';

import styles from './contact.module.css';
import linkArrow from '../../assets/linkArrow.svg';

const contact = props => {
  return (
    <div className={styles.Contact}>
      <h2 className={styles.Title}>Contact</h2>
      <div className={styles.ContactLinks}>
        <div className={styles.Email}>
          <h4>
            <a href='mailto:kml.wilk@gmail.com'>kml.wilk@gmail.com</a>
          </h4>
          <img src={linkArrow} alt='' />
        </div>
        <div className={styles.Github}>
          <h4>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/kikupiku'
            >
              github
            </a>
          </h4>
          <img className={styles.GithubArrow} src={linkArrow} alt='' />
        </div>
        <div className={styles.Linkedin}>
          <h4>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/katarzyna-kaswen-wilk-bb14081b7/'
            >
              linkedin
            </a>
          </h4>
          <img src={linkArrow} alt='' />
        </div>
        <div className={styles.CV}>
          <h4>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://visualcv.com/kkaswen-wilk/'
            >
              resume
            </a>
          </h4>
          <img className={styles.CVArrow} src={linkArrow} alt='' />
        </div>
      </div>
    </div>
  );
};

export default contact;