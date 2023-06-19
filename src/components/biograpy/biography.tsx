import React, { useEffect } from 'react'
import classes from './biography.module.scss';
import Data from '../../data/itData.json';

const Biography = (): JSX.Element  => {
  
  useEffect(() => {//fetch or subscribtion.rxjs
    return () => { };  // cleanup
  },[]);
  
  return (
    <div className={classes.biography}>
        <div className={classes.biographyTrasparent}>
            <div className={classes.biographyBox}>
                <h1 className={classes.title}>Biography</h1>
                <span>
                    {Data.biography}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Biography