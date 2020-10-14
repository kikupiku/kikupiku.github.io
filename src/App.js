import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Main from './components/main/main';
import About from './components/about/about';
import Menu from './components/menu/menu';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import WhenIDontCode from './components/widwidc/widwidc';
import Contact from './components/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Menu />
        <Main />
        <About />
        <Skills />
        <Projects />
        <WhenIDontCode />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
