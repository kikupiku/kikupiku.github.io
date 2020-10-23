import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Swipeable } from 'react-swipeable';

import MobileMenu from '../../components/mobileMenu/mobileMenu';

import styles from './menu.module.css';

const Menu = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuHandler = () => {
    mobileMenuOpen === false
      ? setMobileMenuOpen(true)
      : setMobileMenuOpen(false);
  };

  const goToLinkHandler = () => {
    setMobileMenuOpen(false);
  };

  const menuForMobile = isMobile ? (
    <Swipeable onSwipedRight={(eventData) => mobileMenuHandler()}>
      <MobileMenu
        open={mobileMenuOpen}
        goToLink={goToLinkHandler}
        mode={props.mode}
        className={styles.MobileMenu + ' background'}
      />
    </Swipeable>
  ) : null;

  let classes = [styles.hamburger, styles.hamburgerSpring];
  if (mobileMenuOpen) {
    classes.push(styles.isActive);
  }

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
            <div onClick={props.toggleMode} className={styles.ToggleContainer}>
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
          <li className={styles.MenuBurgerContainer}>
            <div
              mode={props.mode}
              className={classes.join(' ')}
              onClick={mobileMenuHandler}
            >
              <div mode={props.mode} className={styles.hamburgerBox}>
                <div mode={props.mode} className={styles.hamburgerInner}></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {menuForMobile}
    </div>
  );
};

export default Menu;
