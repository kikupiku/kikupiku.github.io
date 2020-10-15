import React, { useState } from 'react';

import styles from './projects.module.css';
import arrow from '../../assets/arrow.png';
import carouselArrow from '../../assets/carousel-arrow.png';
import { myProjects } from './projectsIndex';

const Projects = props => {
  const [ previousProject, setPreviousProject ] = useState(myProjects[0]);
  const [ currentProject, setCurrentProject ] = useState(myProjects[1]);
  const [ nextProject, setNextProject ] = useState(myProjects[2]);

  let projectName = currentProject.name;
  let githubLink = currentProject.github;
  let pageLink = currentProject.link;

  const onNextHandler = () => {
    setPreviousProject(currentProject);
    setCurrentProject(nextProject);
    for (let i = 0; i < myProjects.length; i++) {
      if (nextProject === myProjects[i] && i !== myProjects.length - 1) {
        setNextProject(myProjects[i + 1]);
      } else if (nextProject === myProjects[i] && i === myProjects.length - 1) {
        setNextProject(myProjects[0]);
      }
    }
  }

  const onPreviousHandler = () => {
    setNextProject(currentProject);
    setCurrentProject(previousProject);
    for (let i = 0; i < myProjects.length; i++) {
      if (
        previousProject === myProjects[i] &&
        i !== 0
      ) {
        setPreviousProject(myProjects[i - 1]);
      } else if (
        previousProject === myProjects[i] &&
        i === 0
      ) {
        setPreviousProject(myProjects[myProjects.length - 1]);
      }
    }
  }

  return (
    <div className={styles.ProjectsComponent}>
      <h2 className={styles.Projects}>Projects</h2>
      <div className={styles.CarouselContainer}>
        <div className={styles.ProjGifs}>
          <img src={previousProject.gif} className={styles.PrevProj} alt='' />
          <img src={currentProject.gif} className={styles.CurrentProj} alt='' />
          <img src={nextProject.gif} className={styles.NextProj} alt='' />
        </div>
        <div className={styles.NameContainer}>
          <img
            onClick={onPreviousHandler}
            className={styles.PrevArrow}
            src={carouselArrow}
            alt=''
          />
          <p className={styles.ProjectName}>{projectName}</p>
          <img
            onClick={onNextHandler}
            className={styles.NextArrow}
            src={carouselArrow}
            alt=''
          />
        </div>
        <div className={styles.LinksContainer}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className={styles.Link}
            href={githubLink}
          >
            See Github
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className={styles.Link}
            href={pageLink}
          >
            See Project
          </a>
        </div>
      </div>
      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default Projects;