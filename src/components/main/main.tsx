import React, { useEffect } from 'react'
import classes from './main.module.scss'
import { Outlet } from 'react-router-dom';

const Home = (): JSX.Element  => {

  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);

  return (
    <div className={classes.home}>
        <Outlet />
    </div>
  )
}

export default Home