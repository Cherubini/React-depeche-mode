import React from 'react';
import './albums.scss';
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

const Albums = () => {
  return (
    <div className='cards-container'>
        <h1 className='title-albums'>Albums</h1>
        <div className='album-card'>
            <h1 className='title-album'>Speak & Spell</h1>
            <div className='details'>
                <img className='album-img' src={SpeakAndSpell} alt="Speak & Spell" />
                <div className='span'>
                    <span><strong>Released:</strong> 5 October 1981</span>
                    <span><strong>Studio:</strong> Blackwing (London)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 39:42</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>A Broken Frame</h1>
            <div className='details'>
                <img className='album-img' src={ABrokenFrame} alt="A Broken Frame" />
                <div class='span'>
                    <span><strong>Released:</strong> 27 September 1982</span>
                    <span><strong>Studio:</strong> Blackwing (London)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 40:52</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Construction Time Again</h1>
            <div className='details'>
                <img className='album-img' src={ConstructionTimeAgain} alt="Construction Time Again" />
                <div class='span'>
                    <span><strong>Released:</strong> 22 August 1983</span>
                    <span><strong>Studio:</strong> The Garden (London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Industrial</span>
                    <span><strong>Length:</strong> 42:26</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Some Great Reward</h1>
            <div className='details'>
                <img className='album-img' src={SomeGreatReward} alt="Some Great Reward" />
                <div class='span'>
                    <span><strong>Released:</strong> 24 September 1984</span>
                    <span><strong>Studio:</strong> Music Works (Highbury, London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Industrial, New Wave</span>
                    <span><strong>Length:</strong> 40:18</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Gareth Jones, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Black Celebration</h1>
            <div className='details'>
                <img className='album-img' src={BlackCelebration} alt="Black Celebration" />
                <div class='span'>
                    <span><strong>Released:</strong> 17 March 1986</span>
                    <span><strong>Studio:</strong> Westside and Genetic (London), Hansa Mischraum (Berlin)</span>
                    <span><strong>Genre:</strong> Synth-pop, Post-Punk</span>
                    <span><strong>Length:</strong> 41:01</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Gareth Jones, Daniel Miller</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Music For The Masses</h1>
            <div className='details'>
                <img className='album-img' src={MusicForTheMasses} alt="Music For The Masses" />
                <div class='span'>
                    <span><strong>Released:</strong> 28 September 1987</span>
                    <span><strong>Studio:</strong> Guillaume Tell (Paris), Konk (London), Puk (Gjerlev, Denmark)</span>
                    <span><strong>Genre:</strong> Synth-pop, New Wave</span>
                    <span><strong>Length:</strong> 44:04</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, David Bascombe</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Violator</h1>
            <div className='details'>
                <img className='album-img' src={Violator} alt="Violator" />
                <div class='span'>
                    <span><strong>Released:</strong> 19 March 1990</span>
                    <span><strong>Studio:</strong> Logic (Milan), Puk (Gjerlev), The Church Studios (London), Master Rock (London), Axis (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Alternative Rock, Dance, Gothic Rock</span>
                    <span><strong>Length:</strong> 47:02</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Flood</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Songs Of Faith And Devotion</h1>
            <div className='details'>
                <img className='album-img' src={SOFAD} alt="Songs Of Faith And Devotion" />
                <div class='span'>
                    <span><strong>Released:</strong> 22 March 1993</span>
                    <span><strong>Studio:</strong> Madrid, Chateau du Pape (Hamburg)</span>
                    <span><strong>Genre:</strong> Alternative rock, Grunge</span>
                    <span><strong>Length:</strong> 47:26</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Depeche Mode, Flood</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Ultra</h1>
            <div className='details'>
                <img className='album-img' src={Ultra} alt="Speak & Spell" />
                <div class='span'>
                    <span><strong>Released:</strong> 14 April 1997</span>
                    <span><strong>Studio:</strong> Abbey Road, Eastcote, Westside, Strongroom and RAK (London), Electric Lady (New York City), Larrabee West (Los Angeles)</span>
                    <span><strong>Genre:</strong> Alternative rock, Trip-Hop</span>
                    <span><strong>Length:</strong> 60:07</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Tim Simenon</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Exciter</h1>
            <div className='details'>
                <img className='album-img' src={Exciter} alt="Exciter" />
                <div class='span'>
                    <span><strong>Released:</strong> 14 May 2001</span>
                    <span><strong>Studio:</strong> RAK and Sarm West (London), Sound Design (Santa Barbara), Electric Lady and Sony (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Electronica</span>
                    <span><strong>Length:</strong> 56:40</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Mark Bell</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Playing The Angel</h1>
            <div className='details'>
                <img className='album-img' src={PlayingTheAngel} alt="Playing The Angel" />
                <div class='span'>
                    <span><strong>Released:</strong> 17 October 2005</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Stratosphere Sound (New York City), Whitfield Street (London)</span>
                    <span><strong>Genre:</strong> Electronic rock, Synth-Pop</span>
                    <span><strong>Length:</strong> 52:16</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Sounds Of The Universe</h1>
            <div className='details'>
                <img className='album-img' src={SOTU} alt="Sounds Of The Universe" />
                <div class='span'>
                    <span><strong>Released:</strong> 17 April 2009</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Chung King (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop, Electro Rock</span>
                    <span><strong>Length:</strong> 60:52</span>
                    <span><strong>Label:</strong> Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Delta Machine</h1>
            <div className='details'>
                <img className='album-img' src={DeltaMachine} alt="Delta Machine" />
                <div class='span'>
                    <span><strong>Released:</strong> 22 March 2013</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Jungle City (New York City)</span>
                    <span><strong>Genre:</strong> Electropop, Industrial</span>
                    <span><strong>Length:</strong> 57:55</span>
                    <span><strong>Label:</strong> Columbia, Mute</span>
                    <span><strong>Producer:</strong> Ben Hillier</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Spirit</h1>
            <div className='details'>
                <img className='album-img' src={Spirit} alt="Spirit" />
                <div class='span'>
                    <span><strong>Released:</strong> 17 March 2017</span>
                    <span><strong>Studio:</strong> Sound Design (Santa Barbara, California), Jungle City (New York City)</span>
                    <span><strong>Genre:</strong> Synth-pop</span>
                    <span><strong>Length:</strong> 49:23</span>
                    <span><strong>Label:</strong> Columbia, Mute</span>
                    <span><strong>Producer:</strong> James Ford</span>
                </div>
            </div>
        </div>
        <div className='album-card'>
            <h1 className='title-album'>Memento Mori</h1>
            <div className='details'>
                <img className='album-img' src={MementoMori} alt="Memento Mori" />
                <div class='span'>
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