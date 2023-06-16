import React, { useEffect } from 'react'
import alan from '../../../assets/Alan.jpg';
import classes from '../members-scss/members.module.scss';

const Alan = (): JSX.Element  => {

  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <div className={classes.memberCard}>
        <img className={classes.memberImg} src={alan} alt='Alan Wilder' />
        <div className={`${classes.memberDetails} ${classes.scrollbar}`}>
            <h1 className={classes.name}>Alan Wilder</h1>
            <span className={classes.memberBio}>
                Alan Charles Wilder (Londra, 1º giugno 1959) è un compositore, arrangiatore e produttore discografico britannico.
                È stato tra i componenti dei Depeche Mode. Successivamente ha creato anche il progetto sperimentale di musica elettronica Recoil nel 1986, come parallelo dei Depeche Mode. All'abbandono di questi ultimi (1995), Wilder si è dedicato esclusivamente a Recoil. Wilder ha prodotto e arrangiato brani anche per i Nitzer Ebb e i Curve.
                Nel 2020 è stato inserito nella Rock and Roll Hall of Fame come membro dei Depeche Mode. 
            </span>
        </div>
    </div>
  )
}

export default Alan