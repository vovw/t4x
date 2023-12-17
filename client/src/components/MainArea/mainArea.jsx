import "./mainArea.css";
import { useState } from "react";
import axios from "axios";
export default function MainArea() {
  const [data, setData] = useState({
    data: "",
    sug: []
  });
  const [activeButton, setActiveButton] = useState(null);
  const handleInputChange = (e) => {
    setData({ ...data, data: e.target.value });
  };

  const getDivClick = (value) => {
    setData({ ...data, sug: [...data.sug, value] });
    setActiveButton(value); // Set the active button
  };

  const handleSubmit = async () => {
    try{
      axios.post("http://localhost:5000/getMusic", data);
    }
    catch(err){
      console.log(err.message);
    }
  };

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
        <button
            onClick={() => getDivClick("bass")}
            className={activeButton === "bass" ? "active" : ""}
          >
            bass
          </button>
          <button
            onClick={() => getDivClick("pitch")}
            className={activeButton === "pitch" ? "active" : ""}
          >
            pitch
          </button>
          <button
            onClick={() => getDivClick("length")}
            className={activeButton === "length" ? "active" : ""}
          >
            length
          </button>
          <button
            onClick={() => getDivClick("lofi")}
            className={activeButton === "lofi" ? "active" : ""}
          >
            lofi
          </button>
          <button
            onClick={() => getDivClick("git")}
            className={activeButton === "git" ? "active" : ""}
          >
            git
          </button>
        </div>
      </div>
    </section>
  );
}
