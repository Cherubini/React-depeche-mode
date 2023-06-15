import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
       <header className="header">
        <h1 className="title">Depeche Mode</h1>
        <ul className="nav-list">
          <li className="nav">Home</li>
          <li className="nav">Biography</li>
          <li className="nav">Albums</li>
          <li className="nav">Gallery</li>
        </ul>
      </header>
        {/* <Outlet /> */}
      <footer className="footer">
        <address>
          Davide Consigliere, Valentina Cherubini<br/>
          AlgoWatt, Genova(GE), 2023
        </address>
      </footer>
    </div>
  );
}

export default App;
