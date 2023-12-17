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
              <button onClick={handleSubmit}>{"-->"}</button>
            </div>
          </div>
          <div className="suggestions flex flex-wrap flex-row justify-center gap-4 px-20">
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
