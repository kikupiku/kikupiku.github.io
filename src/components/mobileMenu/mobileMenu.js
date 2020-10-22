import React from 'react';

import styles from './mobileMenu.module.css';

const mobileMenu = (props) => {

  let classes = [styles.MobileMenu];
  props.open
    ? classes.push(styles.MobileMenuOpen)
    : classes.push(styles.MobileMenuClosed);
  
  return (
    <div mode={props.mode} className={classes.join(' ')}>
      <ul className={styles.MenuList}>
        <li>
          <a
            mode={props.mode}
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
            mode={props.mode}
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
            mode={props.mode} onClick={props.goToLink}
            href='#skills'
            className={styles.Link + ' text'}
            to='/'
          >
            Skills
          </a>
        </li>
        <li>
          <a
            mode={props.mode} onClick={props.goToLink}
            href='#projects'
            className={styles.Link + ' text'}
            to='/'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            mode={props.mode} onClick={props.goToLink}
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
