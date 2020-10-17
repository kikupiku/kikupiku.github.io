import React from 'react';

import styles from './widwidc.module.css';

const whenIDontCode = (props) => {
  return (
    <div className={styles.WhenIDontCode}>
      <h2 mode={props.mode} className={styles.Title + ' text'}>What I Do When I Don't Code</h2>
      <div className={styles.HobbiesContainer}>
        <div mode={props.mode} className={styles.Calligraphy}></div>
        <div className={styles.Singing}></div>
        <div mode={props.mode} className={styles.Painting}></div>
        <div mode={props.mode} className={styles.Crafts}></div>
      </div>
    </div>
  );
};

export default whenIDontCode;
