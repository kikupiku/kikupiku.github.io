import React from 'react';
import katarzynapic from '../../assets/k-kaswen-wilk-pic.jpg';
import styles from './main.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const main = props => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark

  return (
    <div id='main' className={styles.Main}>
      <img className={styles.Pic} src={katarzynapic} alt='' />
      <h1 mode={props.mode} className={styles.Title + ' text'}>
        Katarzyna
        <br />
        Kaswen-Wilk
      </h1>
      <h4 className={styles.SecondaryTitle}>frontend developer</h4>
      <img mode={props.mode} className={styles.Arrow} src={arrow} alt=""/>
    </div>
  );
};

export default main;