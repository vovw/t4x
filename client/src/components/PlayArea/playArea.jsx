import { Link } from "react-router-dom";
import { AudioPlayer } from "./bottomArea/bottomArea";
import MiddleArea from "./middleArea/middleArea";

import "./playArea.css";
import { useState } from "react";
import { AiOutlineDollar } from 'react-icons/ai';


export default function PlayArea(props) {
    const { audioLink, promptsug, promptdata } = props;
    const [showButton, setShowButton] = useState(true);

    const handleButtonClick = () => {
        // Handle button click event here
    };

    return (
        <section id="PlayArea">
            <MiddleArea promptdata={promptdata} promptsug={promptsug} />
            <AudioPlayer audioLink={audioLink} />

            <button className="dollar-button">
                <Link to="/pricing">
                    <AiOutlineDollar size={48} /></Link>
            </button>
        </section >
    );
}