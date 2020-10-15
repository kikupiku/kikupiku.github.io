import React from 'react';

import styles from '../../UI/skill/skill.module.css';

const skill = props => {
  const contentForBefore = props.dataLine;
  return (
  <div data-line={contentForBefore} className={styles.SkillContainer}>
    {props.children}
  </div>)
};

export default skill;