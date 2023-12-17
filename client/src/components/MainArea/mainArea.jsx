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
      const response = await axios.post("http://localhost:5000/testing", { data: promptdata, sug: promptsug });
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
          <p className="text-4xl text-center">Enter anything you wish your music would taste</p>
          <p className="text-4xl text-center">Just input what you think and press <b>Enter</b></p>
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
              <button onClick={handleSubmit} className="pr-2 pl-2"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
              </svg></button>
            </div>
          </div>
          <div className="suggestions flex flex-wrap flex-row justify-center gap-4 px-20">
            <button
              onClick={() => getDivClick("jazz")}
              className={promptsug.indexOf("jazz") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("jazz") === -1 ? "" : "white",
              }}
            >
              jazz
            </button>
            <button
              onClick={() => getDivClick("Rock")}
              className={promptsug.indexOf("Rock") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("Rock") === -1 ? "" : "white",
              }}
            >
              rock
            </button>
            <button
              onClick={() => getDivClick("classical")}
              className={promptsug.indexOf("classical") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("classical") === -1 ? "" : "white",
              }}
            >
              classical
            </button>
            <button
              onClick={() => getDivClick("pop")}
              className={promptsug.indexOf("pop") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("pop") === -1 ? "" : "white",
              }}
            >
              pop
            </button>
            <button
              onClick={() => getDivClick("reggae")}
              className={promptsug.indexOf("reggae") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("reggae") === -1 ? "" : "white",
              }}
            >
              reggae
            </button>
            <button
              onClick={() => getDivClick("hip hop")}
              className={promptsug.indexOf("hip hop") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("hip hop") === -1 ? "" : "white",
              }}
            >
              hip hop
            </button><button
              onClick={() => getDivClick("country")}
              className={promptsug.indexOf("country") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("country") === -1 ? "" : "white",
              }}
            >
              country
            </button>
            <button
              onClick={() => getDivClick("blues")}
              className={promptsug.indexOf("blues") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("blues") === -1 ? "" : "white",
              }}
            >
              blues
            </button>
            <button
              onClick={() => getDivClick("guitar")}
              className={promptsug.indexOf("guitar") === -1 ? "" : "active"}
            >
             guitar 
            </button>

		    <button
              onClick={() => getDivClick("drums")}
              className={promptsug.indexOf("drums") === -1 ? "" : "active"}
            >
			drums
            </button>

		    <button
              onClick={() => getDivClick("flute")}
              className={promptsug.indexOf("flute") === -1 ? "" : "active"}
            >
				flute
            </button>

		    <button
              onClick={() => getDivClick("trumpet")}
              className={promptsug.indexOf("trumpet") === -1 ? "" : "active"}
              style={{
                color: promptsug.indexOf("blues") === -1 ? "" : "white",
              }}
            >
				trumpet
            </button>

		    <button
              onClick={() => getDivClick("piano")}
              className={promptsug.indexOf("piano") === -1 ? "" : "active"}
            >
				piano
            </button>

		    <button
              onClick={() => getDivClick("violin")}
              className={promptsug.indexOf("violin") === -1 ? "" : "active"}
            >
				violin
            </button>

		    <button
              onClick={() => getDivClick("harp")}
              className={promptsug.indexOf("harp") === -1 ? "" : "active"}
            >
				harp
            </button>

          </div>
        </div>
      </section>
    );
  }
}
