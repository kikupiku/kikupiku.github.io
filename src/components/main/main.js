import React from 'react';
import katarzynapic from '../../assets/k-kaswen-wilk-pic.jpg';
import styles from './main.module.css';

const main = props => {
  return (
    <div className={styles.Main}>
      <img className={styles.Pic} src={katarzynapic} alt='' />
      <h1 className={styles.Title}>Katarzyna</h1>
      <h1 className={styles.Title}>Kaswen-Wilk</h1>
      <h4 className={styles.SecondaryTitle}>frontend developer</h4>
    </div>
  );
};

export default main;