import React from 'react'
import './home.scss'
import { Outlet } from 'react-router-dom';

const Home = (): JSX.Element  => {
  return (
    <div className="home">
        <Outlet />
    </div>
  )
}

export default Home