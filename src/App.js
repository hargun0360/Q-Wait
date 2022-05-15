import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/layout/Homepage/HomePage';
import QrScanner from './components/layout/QrScanner/QrScanner';
import StorePage from './components/layout/StorePage/StorePage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/store" element={<StorePage/>}/>
        <Route exact path="/qr" element={<QrScanner/>}/>
      </Routes>
    </>
  );
}

export default App;
