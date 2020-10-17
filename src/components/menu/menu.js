import React from 'react';

import styles from './menu.module.css';

const menu = props => {
  return (
    <div className={styles.Container}>
      <div className={styles.Menu}>
        <ul>
          <li>
            <a href='#main' className={styles.Link} to='/'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className={styles.Link} to='/'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className={styles.Link} to='/'>
              Skills
            </a>
          </li>
          {/* <li><Link to={‌{
              pathname: '/',
              hash: '#Skills'
            }}>Skills</Link></li> */}
          <li>
            <a href='#projects' className={styles.Link + ' ' + styles.ModeBox} to='/'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className={styles.Link} to='/'>
              Contact
            </a>
          </li>
          <li>
            <div className={styles.Link}>
              Mode
              <svg
                className={styles.ModeToggleCircle}
                width='48'
                height='24'
                viewBox='0 0 48 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='48' height='24' rx='12' fill='#1B494B' />
              </svg>
              <svg
                className={styles.ModeToggleCircle}
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='10' cy='10' r='10' fill='#C9D9C2' />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default menu;