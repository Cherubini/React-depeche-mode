import React, { useEffect } from 'react';
import andrew from '../../../assets/Andrew.jpeg';
import classes from '../members-scss/members.module.scss';

const Andrew = (): JSX.Element  => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);

  return (
    <div className={classes.memberCard}>
        <img className={classes.memberImg} src={andrew} alt='Andrew Fletcher' />
        <div className={`${classes.memberDetails} ${classes.scrollbar}`}>
            <h1 className={classes.name}>Andrew Fletcher</h1>
            <span className={classes.memberBio}>
                Andrew John Fletcher, conosciuto anche semplicemente come Fletch, (Nottingham, 8 luglio 1961 - Londra, 26 maggio 2022), è stato un tastierista e musicista britannico.
                È noto per essere stato un membro fondatore del gruppo musicale inglese Depeche Mode, nei quali ha militato dal 1980 (anno di fondazione) fino alla sua morte, avvenuta nel 2022.
                Nel 2020 è stato inserito nella Rock and Roll Hall of Fame come membro dei Depeche Mode.
            </span>
        </div>
    </div>
  )
}

export default Andrew