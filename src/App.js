import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to={‌{
            pathname: '/',
            hash: '#Skills'
          }}>Skills</Link></li>
          <li><Link to='/'>Projects</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
