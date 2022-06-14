import React from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom'
import Home from '../views/home/index';

function RouterApp():JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default RouterApp;
