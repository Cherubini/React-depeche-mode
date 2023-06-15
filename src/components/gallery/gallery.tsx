import React from 'react';
import './gallery.scss';
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

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <h1 className='title-gallery'>Gallery</h1>
        <div className='gallery'>
            <a href={one} alt='Depeche Mode' target='blank'><img className='dm-img' src={one} alt="Depeche Mode" /></a>
            <a href={two} alt='Depeche Mode' target='blank'><img className='dm-img' src={two} alt="Depeche Mode" /></a>
            <a href={three} alt='Depeche Mode' target='blank'><img className='dm-img' src={three} alt="Depeche Mode" /></a>
            <a href={four} alt='Depeche Mode' target='blank'><img className='dm-img' src={four} alt="Depeche Mode" /></a>
            <a href={five} alt='Depeche Mode' target='blank'><img className='dm-img' src={five} alt="Depeche Mode" /></a>
            <a href={six} alt='Depeche Mode' target='blank'><img className='dm-img' src={six} alt="Depeche Mode" /></a>
            <a href={seven} alt='Depeche Mode' target='blank'><img className='dm-img' src={seven} alt="Depeche Mode" /></a>
            <a href={eight} alt='Depeche Mode' target='blank'><img className='dm-img' src={eight} alt="Depeche Mode" /></a>
            <a href={nine} alt='Depeche Mode' target='blank'><img className='dm-img' src={nine} alt="Depeche Mode" /></a>
            <a href={ten} alt='Depeche Mode' target='blank'><img className='dm-img' src={ten} alt="Depeche Mode" /></a>
            <a href={eleven} alt='Depeche Mode' target='blank'><img className='dm-img' src={eleven} alt="Depeche Mode" /></a>
            <a href={twelve} alt='Depeche Mode' target='blank'><img className='dm-img' src={twelve} alt="Depeche Mode" /></a>
            <a href={thirteen} alt='Depeche Mode' target='blank'><img className='dm-img' src={thirteen} alt="Depeche Mode" /></a>
          </div>
    </div>
  )
}

export default Gallery