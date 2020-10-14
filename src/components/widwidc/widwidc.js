import React from 'react';

import styles from './widwidc.module.css';

const whenIDontCode = (props) => {
  return (
    <div className={styles.WhenIDontCode}>
      <h2 className={styles.Title}>What I Do When I Don't Code</h2>
      <div className={styles.HobbiesContainer}>
        <div className={styles.Calligraphy}></div>
        <div className={styles.Singing}></div>
        <div className={styles.Painting}></div>
        <div className={styles.Crafts}></div>
      </div>
    </div>
  );
};

export default whenIDontCode;
