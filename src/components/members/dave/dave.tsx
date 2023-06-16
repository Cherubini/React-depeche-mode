import React, { useEffect } from 'react';
import dave from '../../../assets/Dave.jpg';
import classes from '../members-scss/members.module.scss';

const Dave = (): JSX.Element  => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <div className={classes.memberCard}>
        <img className={classes.memberImg} src={dave} alt='Dave Gahan' />
        <div className={`${classes.memberDetails} ${classes.scrollbar}`}>
            <h1 className={classes.name}>Dave Gahan</h1>
            <span className={classes.memberBio}>
                Dave Gahan, all'anagrafe David Callcott (Epping, 9 maggio 1962), è un cantautore e musicista britannico, frontman del gruppo musicale Depeche Mode con il quale, nel 2020 è stato inserito nella Rock and Roll Hall of Fame.
            </span>
        </div>
    </div>
  )
}

export default Dave