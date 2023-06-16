import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.scss';

function App(): JSX.Element {

  return (
    <div className="App">
        <header className="header">
        <Link className='nav-link header-link' to="home/">
          <h1 className="title">Depeche Mode</h1>
        </Link>
        <ul className="nav-list">
          <li className='nav-link'><Link className='nav-link' to="home/">Home</Link></li> 
          <li className='nav-link'><Link className='nav-link' to="biography/">Biography</Link></li>
          <li className='nav-link'><Link className='nav-link' to="albums/">Albums</Link></li>
          <li className='nav-link'><Link className='nav-link' to="gallery/">Gallery</Link></li>
        </ul>
      </header>
        <Outlet />
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
