import React, { useState } from 'react';
import styles from './App.module.css';
import Main from './components/main/main';
import About from './components/about/about';
import Menu from './components/menu/menu';
import Skills from './components/skills/skills';
import Projects from './containers/projects/projects';
import WhenIDontCode from './components/widwidc/widwidc';
import Contact from './components/contact/contact';

const App = () => {

  return (
    <div className={styles.App}>
      <Menu />
      <Main />
      <About />
      <Skills />
      <Projects />
      <WhenIDontCode />
      <Contact />
    </div>
  );
}

export default App;
