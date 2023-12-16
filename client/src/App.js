import './App.css';
import PLayArea from './components/PlayArea/playArea';
import MainArea from './components/MainArea/mainArea';
import Pricing from './components/Pricing/pricing.jsx';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MainArea />      
      <PLayArea />
	  <Pricing /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainArea />} />
        <Route path="/play" element={<PLayArea />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
