import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter } from 'react-router-dom';
import Albums from './components/albums/albums';
import Biography from './components/biograpy/biography';
import Gallery from './components/gallery/gallery';
import Home from './components/home/home';
import Main from './components/main/main';
import Alan from './components/members/alan/alan';
import Andrew from './components/members/andrew/andrew';
import Dave from './components/members/dave/dave';
import Martin from './components/members/martin/martin';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "home?/martin",
            element: <Martin />,
          },
          {
            path: "home?/andrew",
            element: <Andrew />,
          },
          {
            path: "home?/dave",
            element: <Dave />,
          },
          {
            path: "home?/alan",
            element: <Alan />,
          },
          {
            path: "/",
            element: <Main />,
          },]
      },
      {
        path: "home/",
        element: <Main />,
      },
      {
        path: "biography/",
        element: <Biography />,
      },
      {
        path: "albums/",
        element: <Albums />,
      },
      {
        path: "gallery/",
        element: <Gallery />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
