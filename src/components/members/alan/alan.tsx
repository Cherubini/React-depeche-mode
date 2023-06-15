import React from 'react'
import alan from '../../../assets/Alan.jpg';
import './alan.scss';
import { Link } from "react-router-dom";

const Alan = () => {
  return (
    <div className="box">
        <div className='member-card'>
            <img className='member-img' src={alan} alt='Alan Wilder' />
            <div className='member-details'>
                <h1 className='name'>Alan Wilder</h1>
                <span className='member-bio'>
                    Alan Charles Wilder (Londra, 1º giugno 1959) è un compositore, arrangiatore e produttore discografico britannico.
                    È stato tra i componenti dei Depeche Mode. Successivamente ha creato anche il progetto sperimentale di musica elettronica Recoil nel 1986, come parallelo dei Depeche Mode. All'abbandono di questi ultimi (1995), Wilder si è dedicato esclusivamente a Recoil. Wilder ha prodotto e arrangiato brani anche per i Nitzer Ebb e i Curve.
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

export default Alan