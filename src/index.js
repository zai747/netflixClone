import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navb from './navb/navb';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LatestMovies, Originals, PopularMovies } from './url';
import Movielistings from './navitems/movielistings';
import Banner from './navitems/banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navb/>
    <Banner/>
    <Routes>
      <Route path='/originals' element={<Movielistings url={Originals}/>}></Route>
      <Route path='/popular' element={<Movielistings url={PopularMovies}/>}></Route>
      <Route path='/latest' element={<Movielistings url={LatestMovies}/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
