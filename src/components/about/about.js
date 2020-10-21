import React from 'react';
import styles from './about.module.css';
import arrowLight from '../../assets/arrow-light.svg';
import arrowDark from '../../assets/arrow-dark.svg';

const about = (props) => {
  const arrow = props.mode === 'light' ? arrowLight : arrowDark;

  return (
    <div id='about' className={styles.About}>
      <div className={styles.AboutContainer}>
        <h2 mode={props.mode} className={styles.Title + ' text'}>
          About me
        </h2>
        <p className={styles.Note}>
          Can an opera singer self-teach themselves to program? This portfolio
          website can be your answer.
          <br />
          <br />
          After performing on 3 different continents, winning several vocal
          competitions, and having met my spouse in an Opera festival, I felt
          like I had accomplished what I needed to in opera. Also, there were
          many itches that opera simply couldn't scratch. Then I discovered
          programming. Web development allows me to express my creativity in a more
          satisfying way, to create with clear structure and to
          focus in on details in a way I've never been able to do before.
          <br />
          <br />
          Now I am ready to contribute to the world in this new way, and I'm
          looking forward to bringing the best traits of a creative developer
          and focused opera singer to the table. Over my career I have learned
          how to get things done, keep my cool in dire moments (oh, those stage
          mishaps the public never even realised happened...), work with lots
          of different types of people, and take initiative to pick up slack
          when needed. That plus my ability to learn quickly has helped me to
          become a creative but also grounded developer (and possibly the only
          person who feels as good about a standing ovation as about getting
          that bug out, finally!). I hope you enjoy my projects, now cue the curtains!
        </p>
      </div>

      <img className={styles.Arrow} src={arrow} alt='' />
    </div>
  );
};

export default about;
