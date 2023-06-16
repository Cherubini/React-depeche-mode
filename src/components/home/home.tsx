import React from 'react';
import { useEffect } from "react";
import classes from './home.module.scss';
import { Outlet, Link } from "react-router-dom";

const Home = (): JSX.Element  => {

    useEffect(() => {//fetch or subscribtion.rxjs
      return () => { };  // cleanup
    },[]);

  return (
    <div className={classes.homeTrasparent}>
        <div className={classes.membersBox}>
          <Outlet />
            <div className={classes.members}>
                <Link className={classes.link} to={'home/'}>
                  <h1 className={classes.depecheMode}>Depeche Mode</h1>
                </Link>
                <Link className={classes.link} to={'martin/'}>Martin L. Gore</Link>
                <Link className={classes.link} to={'andrew/'}>Andrew Fletcher</Link>
                <Link className={classes.link} to={'dave/'}>Dave Gahan</Link>
                <Link className={classes.link} to={'alan/'}>Alan Wilder</Link>
            </div>
        </div>
    </div>
  )
}

export default Home