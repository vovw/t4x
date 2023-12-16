import './App.css';
import PLayArea from './components/PlayArea/playArea'; 
import MainArea from './components/MainArea/mainArea'; 
import Pricing from './components/Pricing/pricing.jsx';

//---------------------------------------------

function App() {
  return (
    <div className="App">
      <MainArea />      
      <PLayArea />
	  <Pricing />
    </div>
  );
}
export default App;
