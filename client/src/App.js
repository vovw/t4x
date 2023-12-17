import './App.css';
import React, { useState } from 'react';
import PLayArea from './components/PlayArea/playArea';
import MainArea from './components/MainArea/mainArea';
import Pricing from './components/Pricing/pricing.jsx';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [audioLink, setaudioLink] = useState('');
  const [promptdata, setpromptdata] = useState('');
  const [promptsug, setpromptsug] = useState([]);
  const changeaudiofile = (link) => {
    setaudioLink(link);
  }
  const changePromptData = (data) => {
    setpromptdata(data);
  }
  const changePromptSug = (data) => {
    setpromptsug(data);
  }
  return (
    <div className="App">
      {/* <MainArea />      
      <PLayArea />
	  <Pricing /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainArea setaudioLink={changeaudiofile} setpromptdata={changePromptData} setpromptsug={changePromptSug} promptsug={promptsug} promptdata={promptdata}/>} />
        <Route path="/play" element={<PLayArea audioLink={audioLink} promptdata={promptdata} promptsug={promptsug}/>} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
