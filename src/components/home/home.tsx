import React from 'react'
import './home.scss'
import { Outlet } from 'react-router-dom'
// import image from '../../assets/depeche-mode.webp';
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <Outlet />
    </div>
  )
}

export default Home