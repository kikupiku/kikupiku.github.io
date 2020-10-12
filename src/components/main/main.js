import React from 'react';
import katarzynapic from '../../assets/k-kaswen-wilk-pic.jpg';
import styles from './main.module.css';
import arrow from '../../assets/arrow.png';

const main = props => {
  return (
    <div className={styles.Main}>
      <img className={styles.Pic} src={katarzynapic} alt='' />
      <h1 className={styles.Title}>
        Katarzyna
        <br />
        Kaswen-Wilk
      </h1>
      <h4 className={styles.SecondaryTitle}>frontend developer</h4>
      <img className={styles.Arrow} src={arrow} alt=""/>
    </div>
  );
};

export default main;