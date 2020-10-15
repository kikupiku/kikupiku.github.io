import React from 'react';

import styles from './projects.module.css';
import arrow from '../../assets/arrow.png';
import carouselArrow from '../../assets/carousel-arrow.png';

const projects = props => {
  let projectName = 'Newsweek';
  let githubLink = 'Newsweek';
  let pageLink = 'Newsweek';

  return (
    <div className={styles.ProjectsComponent}>
      <h2 className={styles.Projects}>Projects</h2>
      <div className={styles.CarouselContainer}>
        <div className={styles.Prev}></div>
        <div className={styles.Current}></div>
        <div className={styles.Next}></div>
        <div className={styles.NameContainer}>
          <img className={styles.PrevArrow} src={carouselArrow} alt='' />
          <p className={styles.ProjectName}>{projectName}</p>
          <img className={styles.NextArrow} src={carouselArrow} alt='' />
        </div>
        <div className={styles.LinksContainer}>
          <a className={styles.Link} href={githubLink}>
            See Github
          </a>
          <a className={styles.Link} href={pageLink}>
            See Project
          </a>
        </div>
      </div>
      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default projects;