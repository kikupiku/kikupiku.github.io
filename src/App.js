import React, { useState } from 'react';
import styles from './App.module.css';
import Main from './components/main/main';
import About from './components/about/about';
import Menu from './containers/menu/menu';
import Skills from './components/skills/skills';
import Projects from './containers/projects/projects';
import WhenIDontCode from './components/widwidc/widwidc';
import Contact from './containers/contact/contact';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleModeHandler = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  return (
    <div mode={mode} className={styles.App + ' background'}>
      <Menu
        toggleMode={toggleModeHandler}
        mode={mode}
      />
      <Main mode={mode} />
      <About mode={mode} />
      <Skills mode={mode} />
      <Projects mode={mode} />
      <WhenIDontCode mode={mode} />
      <Contact mode={mode} />
    </div>
  );
};

export default App;
