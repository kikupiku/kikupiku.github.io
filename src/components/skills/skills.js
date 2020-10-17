import React from 'react';

import styles from './skills.module.css';
import arrow from '../../assets/arrow.png';
import Skill from '../UI/skill/skill';
import { frontendImages, backendImages, otherImages } from './skillIndex';

function getSkills(images, skills) {
  images.map(({ id, source, name }) => {
    skills.push(
      <Skill dataLine={name} className={styles.Skill} key={id}>
        <img className={styles.Icon} src={source} alt='' />
      </Skill>
    );
    return skills;
  });
}

const skills = props => {
  const frontendSkills = [];
  const backendSkills = [];
  const otherSkills = [];

  getSkills(frontendImages, frontendSkills);
  getSkills(backendImages, backendSkills);
  getSkills(otherImages, otherSkills);

  return (
    <div id='skills' className={styles.SkillsComponent}>
      <h2 className={styles.Skills}>Skills</h2>
      <p>front-end</p>
      <div className={styles.SkillsContainer + ' ' + styles.Frontend}>
        {frontendSkills}
      </div>
      <p>back-end</p>
      <div className={styles.SkillsContainer + ' ' + styles.Backend}>
        {backendSkills}
      </div>
      <p>miscellaneous</p>
      <div className={styles.SkillsContainer + ' ' + styles.Other}>
        {otherSkills}
      </div>
      <img className={styles.Arrow} src={arrow} alt=''/>
    </div>
  );
};

export default skills;