import React from 'react';
import './main.scss';
import { Outlet, Link } from "react-router-dom";

const Main = (): JSX.Element  => {
  return (
    <div className="home-trasparent">
        <div className="members-box">
          <Outlet />
            <div className="members">
                <h1 className="depeche-mode">Depeche Mode</h1>
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