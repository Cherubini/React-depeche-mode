import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import classes from './index.module.scss';

function App(): JSX.Element {

  return (
    <div className="App">
        <header className={classes.header}>
        <Link className={`${classes.navLink} ${classes.headerLink}`} to="home/">
          <h1 className={classes.title}>Depeche Mode</h1>
        </Link>
        <ul className={classes.navList}>
          <li className={classes.navLink}><Link className={classes.navLink} to="home/">Home</Link></li> 
          <li className={classes.navLink}><Link className={classes.navLink} to="biography/">Biography</Link></li>
          <li className={classes.navLink}><Link className={classes.navLink} to="albums/">Albums</Link></li>
          <li className={classes.navLink}><Link className={classes.navLink} to="gallery/">Gallery</Link></li>
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
