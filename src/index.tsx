import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Albums from './components/albums/albums';
import Biography from './components/biograpy/biography';
import Gallery from './components/gallery/gallery';
import Main from './components/home/home';
import Alan from './components/members/alan/alan';
import Andrew from './components/members/andrew/andrew';
import Dave from './components/members/dave/dave';
import Martin from './components/members/martin/martin';
import MainImg from './components/home-img/home-img';
import { getHome } from './dataService/dataService';

const root = document.getElementById('root') as HTMLElement;

render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />} loader={getHome}>
            <Route path="home?/martin" element={<Martin />} />
            <Route path="home?/andrew" element={<Andrew />} />
            <Route path="home?/dave" element={<Dave />} />
            <Route path="home?/alan" element={<Alan />} />
            <Route path="home?/" element={<MainImg />} />
          </Route>
          <Route path="biography/" element={<Biography />} />
          <Route path="albums/" element={<Albums />} />
          <Route path="gallery/" element={<Gallery />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  root
);

reportWebVitals();
