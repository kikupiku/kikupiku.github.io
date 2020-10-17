import React, { useState } from 'react';

import styles from './projects.module.css';
import arrow from '../../assets/arrow.png';
import carouselArrow from '../../assets/carousel-arrow.png';
import { myProjects } from './projectsIndex';

const Projects = props => {
  const [earlierProject, setEarlierProject] = useState(myProjects[myProjects.length - 1]);
  const [previousProject, setPreviousProject] = useState(myProjects[0]);
  const [currentProject, setCurrentProject] = useState(myProjects[1]);
  const [nextProject, setNextProject] = useState(myProjects[2]);
  const [laterProject, setLaterProject] = useState(myProjects[3]);

  const [goBackButton, setGoBackButton] = useState(0);
  const [goForwardButton, setGoForwardButton] = useState(0);

  let projectName = currentProject.name;
  let githubLink = currentProject.github;
  let pageLink = currentProject.link;

  const onPreviousHandler = () => {
    setGoBackButton(1);
    setTimeout(() => {
      const prev = {...previousProject};
      const curr = {...currentProject};
      const next = {...nextProject};
      const latr = {...laterProject};
      setEarlierProject(prev);
      setPreviousProject(curr);
      setCurrentProject(next);
      setNextProject(latr);
      const i = myProjects.findIndex(element => element.name === latr.name);
      let newLater;
      if (i === myProjects.length - 1) {
        newLater = myProjects[0];
      } else {
        newLater = myProjects[i + 1];
      }
      setLaterProject(newLater);
    }, 300);
  }

  const onNextHandler = () => {
    setGoForwardButton(1);
    setTimeout(() => {
      const next = { ...nextProject };
      const curr = { ...currentProject };
      const prev = { ...previousProject };
      const earl = { ...earlierProject };
      setLaterProject(next);
      setNextProject(curr);
      setCurrentProject(prev);
      setPreviousProject(earl);
      const i = myProjects.findIndex((element) => element.name === earl.name);
      let newEarlier;
      if (i === 0) {
        newEarlier = myProjects[myProjects.length - 1];
      } else {
        newEarlier = myProjects[i - 1];
      }
      setEarlierProject(newEarlier);
    }, 300);
  }

  return (
    <div id='projects' className={styles.ProjectsComponent}>
      <h2 className={styles.Projects}>Projects</h2>
      <div className={styles.CarouselContainer}>
        <div className={styles.ProjGifs}>
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0);
              setGoForwardButton(0);
            }}
            src={earlierProject.gif}
            className={styles.EarlierProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0);
              setGoForwardButton(0);
            }}
            src={previousProject.gif}
            className={styles.PrevProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0);
              setGoForwardButton(0);
            }}
            src={currentProject.gif}
            className={styles.CurrentProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0);
              setGoForwardButton(0);
            }}
            src={nextProject.gif}
            className={styles.NextProj}
            alt=''
          />
          <img
            goforward={goForwardButton}
            goback={goBackButton}
            onAnimationEnd={() => {
              setGoBackButton(0);
              setGoForwardButton(0);
            }}
            src={laterProject.gif}
            className={styles.LaterProj}
            alt=''
          />
        </div>
        <div className={styles.NameContainer}>
          <img
            onClick={onPreviousHandler}
            className={styles.PrevArrow}
            src={carouselArrow}
            onAnimationEnd={() => setGoBackButton(0)}
            alt=''
          />
          <p className={styles.ProjectName}>{projectName}</p>
          <img
            onClick={onNextHandler}
            className={styles.NextArrow}
            src={carouselArrow}
            alt=''
            onAnimationEnd={() => setGoForwardButton(0)}
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