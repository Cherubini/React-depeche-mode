import React from 'react';
import andrew from '../../../assets/Andrew.jpeg';
import './andrew.scss';
import { Link } from "react-router-dom";

const Andrew = () => {
  return (
    <div className="box">
        <div className='member-card'>
            <img className='member-img' src={andrew} alt='Andrew Fletcher' />
            <div className='member-details'>
                <h1 className='name'>Andrew Fletcher</h1>
                <span className='member-bio'>
                    Andrew John Fletcher, conosciuto anche semplicemente come Fletch, (Nottingham, 8 luglio 1961 - Londra, 26 maggio 2022), è stato un tastierista e musicista britannico.
                    È noto per essere stato un membro fondatore del gruppo musicale inglese Depeche Mode, nei quali ha militato dal 1980 (anno di fondazione) fino alla sua morte, avvenuta nel 2022.
                    Nel 2020 è stato inserito nella Rock and Roll Hall of Fame come membro dei Depeche Mode.
                </span>
            </div>
        </div>
        <div className='back-box'>
            <Link className="back" to={"/"}>Back</Link>
        </div>
    </div>
  )
}

export default Andrew