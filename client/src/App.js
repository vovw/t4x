import './App.css';
import React, { useState } from 'react';
import PLayArea from './components/PlayArea/playArea';
import MainArea from './components/MainArea/mainArea';
import Pricing from './components/Pricing/pricing.jsx';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [audioLink, setaudioLink] = useState('');
  const [prompt, setprompt] = useState('');

  const changeaudiofile = (link) => {
    setaudioLink(link);
  }
  return (
    <div className="App">
      {/* <MainArea />      
      <PLayArea />
	  <Pricing /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainArea setaudioLink={changeaudiofile} setprompt={setprompt}/>} />
        <Route path="/play" element={<PLayArea audioLink={audioLink}/>} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
