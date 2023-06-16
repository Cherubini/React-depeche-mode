import React, { useEffect } from 'react';
import image from '../../assets/depeche-mode.webp';

const MainImg = () => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <img className='img' alt='Depeche Mode' src={image} />
  )
}

export default MainImg