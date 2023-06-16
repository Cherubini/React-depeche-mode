import React, { useEffect } from 'react';
import image from '../../assets/depeche-mode.webp';
import classes from './home-img.module.scss';

const MainImg = () => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <img className={classes.img} alt='Depeche Mode' src={image} />
  )
}

export default MainImg