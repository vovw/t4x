import { AudioPlayer } from "./bottomArea/bottomArea";
import MiddleArea from "./middleArea/middleArea";
import "./playArea.css";

export default function PLayArea(){
    return(
        <section id="PlayArea">
            <MiddleArea />
            <AudioPlayer />
        </section>
    )
}