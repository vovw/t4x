import "./mainArea.css";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function MainArea(props) {
  const { setaudioLink, setpromptdata, setpromptsug, promptsug, promptdata } = props;
  const [isLoading, setIsLoading] = useState(false); // This is the state that will be used to show the loading spinner
  const [redirect, setRedirect] = useState(false); // This is the state that will be used to redirect the user to the next page
  const handleInputChange = (e) => {
    setpromptdata(e.target.value);
  };

  const getDivClick = (value) => {
    if (promptsug.indexOf(value) === -1) {
      setpromptsug([...promptsug, value])
    } else {
      setpromptsug(promptsug.filter((item) => item !== value));
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post("http://localhost:5000/getmusic", { data: promptdata, sug: promptsug });
      const link = response
      console.log(response)
      setaudioLink(link.data);
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
    catch (err) {
      console.log(err.message);
    }
  };

  if (redirect) {
    return <Navigate to="/play" />;
  } else if (isLoading) {
    <h1>Loading...</h1>
  } else {
    return (
      <section id="MainArea" className="flex flex-col justify-evenly items-center mt-72 gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-4xl">Enter anything you wish your music would taste</p>
          <p className="text-4xl">Just input what you think and </p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row justify-center">
            <div className="flex flex-row input-field p-3 rounded-2xl">
              <input type="text" onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
              <button onClick={handleSubmit}>{"-->"}</button>
            </div>
          </div>
          <div className="suggestions flex flex-row justify-center gap-4">
            <button
              onClick={() => getDivClick("jazz")}
              className={promptsug.indexOf("jazz") === -1 ? "" : "active"}
            >
              jazz
            </button>
            <button
              onClick={() => getDivClick("Rock")}
              className={promptsug.indexOf("Rock") === -1 ? "" : "active"}
            >
              rock
            </button>
            <button
              onClick={() => getDivClick("classical")}
              className={promptsug.indexOf("classical") === -1 ? "" : "active"}
            >
              classical
            </button>
            <button
              onClick={() => getDivClick("pop")}
              className={promptsug.indexOf("pop") === -1 ? "" : "active"}
            >
              pop
            </button>
            <button
              onClick={() => getDivClick("reggae")}
              className={promptsug.indexOf("reggae") === -1 ? "" : "active"}
            >
              reggae
            </button>
            <button
              onClick={() => getDivClick("hip hop")}
              className={promptsug.indexOf("hip hop") === -1 ? "" : "active"}
            >
              hip hop
            </button><button
              onClick={() => getDivClick("country")}
              className={promptsug.indexOf("country") === -1 ? "" : "active"}
            >
              country
            </button>
            <button
              onClick={() => getDivClick("blues")}
              className={promptsug.indexOf("blues") === -1 ? "" : "active"}
            >
              blues
            </button>
          </div>
        </div>
      </section>
    );
  }
}
