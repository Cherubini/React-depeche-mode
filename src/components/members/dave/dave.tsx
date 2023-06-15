import React from 'react';
import dave from '../../../assets/Dave.jpg';
import './dave.scss';
import { Link } from "react-router-dom";

const Dave = () => {
  return (
    <div className="box">
        <div className='member-card'>
            <img className='member-img' src={dave} alt='Dave Gahan' />
            <div className='member-details'>
                <h1 className='name'>Dave Gahan</h1>
                <span className='member-bio'>
                    Dave Gahan, all'anagrafe David Callcott (Epping, 9 maggio 1962), è un cantautore e musicista britannico, frontman del gruppo musicale Depeche Mode con il quale, nel 2020 è stato inserito nella Rock and Roll Hall of Fame.
                </span>
            </div>
        </div>
        <div className='back-box'>
            <Link className="back" to={"/"}>Back</Link>
        </div>
    </div>
  )
}

export default Dave