import React from 'react';

import styles from '../../UI/skill/skill.module.css';

const skill = props => (
  <div className={styles.SkillContainer}>
    {props.children}
  </div>
);

export default skill;