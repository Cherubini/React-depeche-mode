import React, { useEffect } from 'react';
import classes from './albums.module.scss';
import SpeakAndSpell from '../../assets/Speak-&-Spell.png';
import ABrokenFrame from '../../assets/A-Broken-Frame.png';
import ConstructionTimeAgain from '../../assets/Contruction-Time-Again.png';
import SomeGreatReward from '../../assets/Some-Great-Reward.png';
import BlackCelebration from '../../assets/Black-Celebration.jpg';
import MusicForTheMasses from '../../assets/Music-For-The-Masses.png';
import Violator from '../../assets/Violator.jpg';
import SOFAD from '../../assets/Songs-Of-Faith-And-Devotion.png';
import Ultra from '../../assets/Ultra.png';
import Exciter from '../../assets/Exciter.jpg';
import PlayingTheAngel from '../../assets/Playing-The-Angel.jpg';
import SOTU from '../../assets/Sounds-Of-The-Universe.png';
import DeltaMachine from '../../assets/Delta-Machine.jpg';
import Spirit from '../../assets/Spirit.jpg';
import MementoMori from '../../assets/Memento-Mori.jpg';

const Albums = (): JSX.Element  => {
    
    useEffect(() => {//fetch or subscribtion.rxjs
        return () => { };  // cleanup
      },[]);

  return (
    <div className={classes.cardsContainer}>
        <h1 className={classes.titleAlbums}>Albums</h1>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Speak & Spell</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={SpeakAndSpell} alt="Speak & Spell" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 5 October 1981</span>
                    <span><strong>Studio:</strong> Blackwing (London)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 39:42</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>A Broken Frame</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={ABrokenFrame} alt="A Broken Frame" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 27 September 1982</span>
                    <span><strong>Studio:</strong> Blackwing (London)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 40:52</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Construction Time Again</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={ConstructionTimeAgain} alt="Construction Time Again" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 22 August 1983</span>
                    <span><strong>Studio:</strong> The Garden (London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Industrial</span>
                    <span><strong>Length:</strong> 42:26</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Some Great Reward</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={SomeGreatReward} alt="Some Great Reward" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 24 September 1984</span>
                    <span><strong>Studio:</strong> Music Works (Highbury, London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Industrial, New Wave</span>
                    <span><strong>Length:</strong> 40:18</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Gareth Jones, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Black Celebration</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={BlackCelebration} alt="Black Celebration" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 17 March 1986</span>
                    <span><strong>Studio:</strong> Westside and Genetic (London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Post-Punk</span>
                    <span><strong>Length:</strong> 41:01</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Gareth Jones, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Music For The Masses</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={MusicForTheMasses} alt="Music For The Masses" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 28 September 1987</span>
                    <span><strong>Studio:</strong> Guillaume Tell (Paris), Konk (London), Puk (Gjerlev, Denmark)</span>
                    <span><strong>Genre:</strong> Synth-pop, New Wave</span>
                    <span><strong>Length:</strong> 44:04</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, David Bascombe</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Violator</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={Violator} alt="Violator" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 19 March 1990</span>
                    <span><strong>Studio:</strong> Logic (Milan), Puk (Gjerlev), The Church Studios (London), Master Rock (London), Axis (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Alternative Rock, Dance, Gothic Rock</span>
                    <span><strong>Length:</strong> 47:02</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Flood</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Songs Of Faith And Devotion</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={SOFAD} alt="Songs Of Faith And Devotion" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 22 March 1993</span>
                    <span><strong>Studio:</strong> Madrid, Chateau du Pape (Hamburg)</span>
                    <span><strong>Genre:</strong> Alternative rock, Grunge</span>
                    <span><strong>Length:</strong> 47:26</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Flood</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Ultra</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={Ultra} alt="Speak & Spell" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 14 April 1997</span>
                    <span><strong>Studio:</strong> Abbey Road, Eastcote, Westside, Strongroom and RAK (London), Electric Lady (New York City), Larrabee West (Los Angeles)</span>
                    <span><strong>Genre:</strong> Alternative rock, Trip-Hop</span>
                    <span><strong>Length:</strong> 60:07</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Tim Simenon</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Exciter</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={Exciter} alt="Exciter" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 14 May 2001</span>
                    <span><strong>Studio:</strong> RAK and Sarm West (London), Sound Design (Santa Barbara), Electric Lady and Sony (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Electronica</span>
                    <span><strong>Length:</strong> 56:40</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Mark Bell</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Playing The Angel</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={PlayingTheAngel} alt="Playing The Angel" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 17 October 2005</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Stratosphere Sound (New York City), Whitfield Street (London)</span>
                    <span><strong>Genre:</strong> Electronic rock, Synth-Pop</span>
                    <span><strong>Length:</strong> 52:16</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Sounds Of The Universe</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={SOTU} alt="Sounds Of The Universe" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 17 April 2009</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Chung King (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Electro Rock</span>
                    <span><strong>Length:</strong> 60:52</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Delta Machine</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={DeltaMachine} alt="Delta Machine" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 22 March 2013</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Jungle City (New York City)</span>
                    <span><strong>Genre:</strong> Electropop, Industrial</span>
                    <span><strong>Length:</strong> 57:55</span>
                    <span><strong>Label:</strong> Columbia, Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Spirit</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={Spirit} alt="Spirit" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 17 March 2017</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Jungle City (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 49:23</span>
                    <span><strong>Label:</strong> Columbia, Mute</span>
                    <span><strong>Producer:</strong> James Ford</span>
                </div>
            </div>
        </div>
        <div className={classes.albumCard}>
            <h1 className={classes.titleAlbum}>Memento Mori</h1>
            <div className={classes.details}>
                <img className={classes.albumImg} src={MementoMori} alt="Memento Mori" />
                <div className={classes.spanBox}>
                    <span><strong>Released:</strong> 24 March 2023</span>
                    <span><strong>Studio:</strong> Electric Ladyboy (Santa Barbara), Shangri-La (Malibu)</span>
                    <span><strong>Genre:</strong> Alternative Rock, Synth-pop</span>
                    <span><strong>Length:</strong> 50:24</span>
                    <span><strong>Label:</strong> Columbia</span>
                    <span><strong>Producer:</strong> James Ford</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Albums