import React from 'react';
import styles from './skills.module.css';

const skills = props => {
  return (
    <div>
      <h2>Skills</h2>
      <p>front-end</p>
      <div className={styles.SkillContainer + ' ' + styles.Frontend}></div>
      <p>back-end</p>
      <div className={styles.SkillContainer + ' ' + styles.Backend}></div>
      <p>miscellaneous</p>
      <div className={styles.SkillContainer + ' ' + styles.Other}></div>
    </div>
  );
};

export default skills;