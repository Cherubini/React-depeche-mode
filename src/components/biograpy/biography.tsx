import React, { useEffect } from 'react'
import classes from './biography.module.scss'

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
                    I Depeche Mode sono un gruppo musicale britannico formatosi a Basildon nel 1980 e composto da Dave Gahan (voce) e Martin Gore (chitarra e tastiere).
                    La formazione originaria comprendeva anche Vince Clarke (tastiere, chitarra, cori, drum machine) ed Andy Fletcher chiamato anche Fletch (tastiere, basso e portavoce).
                    Nel 1981 Clarke lasciò la band per fondare gli Yazoo con Alison Moyet e in seguito gli Erasure con Andy Bell. Dopo l'abbandono di Clarke, Alan Wilder (tastiere, batteria, cori, basso, pianoforte, percussioni) si è unito al gruppo nel 1982 per poi lasciarlo nel 1995, in seguito la band continuò la propria attività come trio fino alla morte di Fletch, avvenuta nel 2022.
                    Affermatisi sulla scena synth pop britannica agli inizi degli anni ottanta, la loro fama si è protratta ed accresciuta negli anni. Attraverso una proficua carriera lunga quattro decenni, hanno abbracciato attraverso l'utilizzo dell'elettronica più di un genere musicale, con larghe concessioni al pop rock e alla new wave, specie nella seconda fase, e una massiccia incursione nella dance alternativa.
                    Con oltre 100 milioni di dischi venduti in tutto il mondo, diversi gruppi e artisti provenienti da tutti i generi musicali influenzati dai loro lavori e numerose cover delle loro canzoni realizzate, i Depeche Mode sono uno dei gruppi più influenti nella storia della musica elettronica. La nota rivista musicale britannica Q li ha definiti "la band elettronica più popolare e longeva che il mondo abbia mai conosciuto", e Rolling Stone "la quintessenza della musica elettronica degli anni ottanta".
                </span>
            </div>
        </div>
    </div>
  )
}

export default Biography