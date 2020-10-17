import React from 'react';
import styles from './about.module.css';
import arrow from '../../assets/arrow.png';

const about = props => {
  return (
    <div id='about' className={styles.About}>
      <div className={styles.AboutContainer}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      
      <img className={styles.Arrow} src={arrow} alt=''/>
    </div>
  );
};

export default about;