import React from 'react';
import martin from '../../../assets/Martin.webp';
import '../members-scss/members.scss';
import { Link } from "react-router-dom";

const Martin = (): JSX.Element  => {
  return (
    <div className='member-card'>
        <img className='member-img' src={martin} alt='Martin Gore' />
        <div className='member-details scrollbar'>
            <h1 className='name'>Martin Gore</h1>
            <span className='member-bio'>
                Martin Lee Gore (Dagenham, 23 luglio 1961) è un compositore, musicista e cantautore britannico, membro del gruppo Depeche Mode.
                Nella prima formazione del gruppo, il suo ruolo era soprattutto quello di tastierista, ma dopo l'abbandono di Vince Clarke, è diventato anche autore delle canzoni. Dal 1988, conseguentemente all'introduzione massiccia della chitarra nel sound della band, dal vivo ha iniziato ad alternare le tastiere a questa, il suo vero strumento. Altri suoi compiti sono sempre stati i cori e la voce principale in alcune canzoni.
                Grazie alle sue canzoni Gore è stato uno dei compositori ed autori migliori nel panorama musicale contemporaneo, a partire dall'elettronica, passando per il pop e arrivando sino al rock.
                Nel 2020 è stato inserito nella Rock and Roll Hall of Fame come membro dei Depeche Mode. 
            </span>
        </div>
    </div>
  )
}

export default Martin