import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import MobileMenu from '../../components/mobileMenu/mobileMenu';

import styles from './menu.module.css';
import burgerMenuOpen from '../../assets/burgerMenuOpen.svg';
import burgerMenuClosed from '../../assets/burgerMenuClosed.svg';
import burgerMenuOpenDark from '../../assets/burgerMenuOpenDark.svg';
import burgerMenuClosedDark from '../../assets/burgerMenuClosedDark.svg';

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

  const menuForMobile = isMobile ? <MobileMenu
          open={mobileMenuOpen}
          goToLink={goToLinkHandler}
          mode={props.mode}
          className={styles.MobileMenu + ' background'}
        /> : null;

  let menuIcon;
  if (props.mode === 'light') {
    menuIcon = mobileMenuOpen ? burgerMenuOpen : burgerMenuClosed;
  } else {
    menuIcon = mobileMenuOpen ? burgerMenuOpenDark : burgerMenuClosedDark;
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
          <li className={styles.MenuBurger}>
            <div onClick={mobileMenuHandler}>
              <img className={styles.MenuIcon} src={menuIcon} alt='' />
            </div>
          </li>
        </ul>
      </div>
      {menuForMobile}
    </div>
  );
};

export default Menu;
