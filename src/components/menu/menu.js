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
          <li>
            <a
              href='#projects'
              className={styles.Link + ' ' + styles.ModeBox}
              to='/'
            >
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className={styles.Link} to='/'>
              Contact
            </a>
          </li>
          <li>
            <div className={styles.Link + ' ' + styles.Mode}>Mode</div>
          </li>
          <li>
            <div className={styles.ToggleContainer}>
              <div className={styles.Toggle}></div>
            <div className={styles.ToggleCircle}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default menu;