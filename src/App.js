import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './App.module.css';
import Main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <ul>
          <li><Link className={styles.Link} to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          {/* <li><Link to={‌{
            pathname: '/',
            hash: '#Skills'
          }}>Skills</Link></li> */}
          <li><Link to='/'>Projects</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
        <Main />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
