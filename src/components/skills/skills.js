import React from 'react';

import styles from './skills.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';
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
  const arrow = props.mode === 'light' ? arrowLight : arrowDark;

  const frontendSkills = [];
  const backendSkills = [];
  const otherSkills = [];

  getSkills(frontendImages, frontendSkills);
  getSkills(backendImages, backendSkills);
  getSkills(otherImages, otherSkills);

  return (
    <div id='skills' className={styles.SkillsComponent}>
      <h2 mode={props.mode} className={styles.Skills + ' text'}>Skills</h2>
      <p>front-end</p>
      <div className={styles.SkillsContainer}>
        {frontendSkills}
      </div>
      <p>back-end</p>
      <div className={styles.SkillsContainer}>
        {backendSkills}
      </div>
      <p>miscellaneous</p>
      <div className={styles.SkillsContainer}>
        {otherSkills}
      </div>
      <img className={styles.Arrow} src={arrow} alt=''/>
    </div>
  );
};

export default skills;