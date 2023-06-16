import React from 'react';
import { useEffect } from "react";
import './home.scss';
import { Outlet, Link } from "react-router-dom";

const Main = (): JSX.Element  => {

    useEffect(() => {//fetch or subscribtion.rxjs
      return () => { };  // cleanup
    },[]);

  return (
    <div className="home-trasparent">
        <div className="members-box">
          <Outlet />
            <div className="members">
                <Link className='link' to={'home/'}>
                  <h1 className="depeche-mode">Depeche Mode</h1>
                </Link>
                <Link className='link' to={'martin/'}>Martin L. Gore</Link>
                <Link className='link' to={'andrew/'}>Andrew Fletcher</Link>
                <Link className='link' to={'dave/'}>Dave Gahan</Link>
                <Link className='link' to={'alan/'}>Alan Wilder</Link>
            </div>
        </div>
    </div>
  )
}

export default Main