import React from 'react'
import { useEffect, useState } from "react";
import './home.scss'
import { Outlet } from 'react-router-dom';

const Home = (): JSX.Element  => {

  const [user, setUser] = useState("root");

  useEffect(() => {
    alert('pippo')
    return () => { alert("adios amigos! I'm dying, I am leaving the DOM") };  // cleanup

  });

  return (
    <div className="home">
        <Outlet />
    </div>
  )
}

export default Home