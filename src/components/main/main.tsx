import React, { useEffect } from 'react'
import './main.scss'
import { Outlet } from 'react-router-dom';

const Home = (): JSX.Element  => {

  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);

  return (
    <div className="home">
        <Outlet />
    </div>
  )
}

export default Home