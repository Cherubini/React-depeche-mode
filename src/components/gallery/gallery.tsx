import React, { useEffect } from 'react';
import classes from './gallery.module.scss';
import one from '../../assets/1.webp';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import five from '../../assets/5.webp';
import six from '../../assets/6.jpg';
import seven from '../../assets/7.jpg';
import eight from '../../assets/8.webp';
import nine from '../../assets/9.webp';
import ten from '../../assets/10.webp';
import eleven from '../../assets/11.webp';
import twelve from '../../assets/12.webp';
import thirteen from '../../assets/13.jpg';

const Gallery = (): JSX.Element  => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <div className={classes.galleryContainer}>
        <h1 className={classes.titleGallery}>Gallery</h1>
        <div className={classes.gallery}>
            <a href={one} target='blank'><img className={classes.dmImg} src={one} alt="Depeche Mode" /></a>
            <a href={two} target='blank'><img className={classes.dmImg} src={two} alt="Depeche Mode" /></a>
            <a href={three} target='blank'><img className={classes.dmImg} src={three} alt="Depeche Mode" /></a>
            <a href={four} target='blank'><img className={classes.dmImg} src={four} alt="Depeche Mode" /></a>
            <a href={five} target='blank'><img className={classes.dmImg} src={five} alt="Depeche Mode" /></a>
            <a href={six} target='blank'><img className={classes.dmImg} src={six} alt="Depeche Mode" /></a>
            <a href={seven} target='blank'><img className={classes.dmImg} src={seven} alt="Depeche Mode" /></a>
            <a href={eight} target='blank'><img className={classes.dmImg} src={eight} alt="Depeche Mode" /></a>
            <a href={nine} target='blank'><img className={classes.dmImg} src={nine} alt="Depeche Mode" /></a>
            <a href={ten} target='blank'><img className={classes.dmImg} src={ten} alt="Depeche Mode" /></a>
            <a href={eleven} target='blank'><img className={classes.dmImg} src={eleven} alt="Depeche Mode" /></a>
            <a href={twelve} target='blank'><img className={classes.dmImg} src={twelve} alt="Depeche Mode" /></a>
            <a href={thirteen} target='blank'><img className={classes.dmImg} src={thirteen} alt="Depeche Mode" /></a>
          </div>
    </div>
  )
}

export default Gallery