import "./mainArea.css";
import { useState } from "react";
import axios from "axios";
export default function MainArea() {
  const [data, setData] = useState({
    data: "",
    sug: []
  });

  const handleInputChange = (e) => {
    setData({ ...data, data: e.target.value });
  };

  const getDivClick = (value) => {
    setData({ ...data, sug: [...data.sug, value] });
  };

  const handleSubmit = async () => {
	  try{
		  const response = axios.post("http://localhost:5000/getmusic",data)
	  }catch(e){
		console.log(e.message)
	  }
    // axios.post("http://localhost:5000/get-music",data);
  }
  return (
    <section id="MainArea" className="flex flex-col justify-evenly items-center mt-72 gap-8">
      <div className="flex flex-col justify-center">
        <p className="text-4xl">Enter anything you wish your music would taste</p>
        <p className="text-4xl">Just input what you think and </p>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row input-field p-3 rounded-2xl">
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleSubmit}>{"-->"}</button>
          </div>
        </div>
        <div className="suggestions flex flex-row justify-center gap-4">
          <button onClick={() => getDivClick("bass")}>bass</button>
          <button onClick={() => getDivClick("pitch")}>pitch</button>
          <button onClick={() => getDivClick("length")}>length</button>
          <button onClick={() => getDivClick("lofi")}>lofi</button>
          <button onClick={() => getDivClick("git")}>git</button>
        </div>
      </div>
    </section>
  );
}
