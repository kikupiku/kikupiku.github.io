import React from 'react';

import styles from './menu.module.css';

const menu = props => {
  return (
    <div mode={props.mode} className={styles.Container + ' background'}>
      <div className={styles.Menu}>
        <ul>
          <li>
            <a
              mode={props.mode}
              href='#main'
              className={styles.Link + ' text'}
              to='/'
            >
              Home
            </a>
          </li>
          <li>
            <a
              mode={props.mode}
              href='#about'
              className={styles.Link + ' text'}
              to='/'
            >
              About
            </a>
          </li>
          <li>
            <a
              mode={props.mode}
              href='#skills'
              className={styles.Link + ' text'}
              to='/'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              mode={props.mode}
              href='#projects'
              className={styles.Link + ' text'}
              to='/'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              mode={props.mode}
              href='#contact'
              className={styles.Link + ' text'}
              to='/'
            >
              Contact
            </a>
          </li>
          <li>
            <div
              mode={props.mode}
              className={styles.Link + ' ' + styles.Mode + ' text'}
            >
              Mode
            </div>
          </li>
          <li>
            <div onClick={props.toggle} className={styles.ToggleContainer}>
              <div
                mode={props.mode}
                className={styles.Toggle + ' secondaryBackground'}
              ></div>
              <div
                mode={props.mode}
                className={styles.ToggleCircle + ' background'}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default menu;