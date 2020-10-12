import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import Main from './components/main/main';
import About from './components/about/about';
import Menu from './components/menu/menu';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Menu />
        <Main />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
