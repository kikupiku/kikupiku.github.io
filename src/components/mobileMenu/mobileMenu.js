import React from 'react';

import styles from './mobileMenu.module.css';

const mobileMenu = (props) => {
  
  return (
    <div mode={props.mode} className={styles.MobileMenu}>
      <ul className={styles.MenuList}>
        <li>
          <a
            onClick={props.goToLink}
            href='#main'
            className={styles.Link + ' text'}
            to='/'
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={props.goToLink}
            href='#about'
            className={styles.Link + ' text'}
            to='/'
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={props.goToLink}
            href='#skills'
            className={styles.Link + ' text'}
            to='/'
          >
            Skills
          </a>
        </li>
        <li>
          <a
            onClick={props.goToLink}
            href='#projects'
            className={styles.Link + ' text'}
            to='/'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={props.goToLink}
            href='#contact'
            className={styles.Link + ' text'}
            to='/'
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default mobileMenu;
