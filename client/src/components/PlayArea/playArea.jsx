import { AudioPlayer } from "./bottomArea/bottomArea";
import MiddleArea from "./middleArea/middleArea";
import "./playArea.css";
import TopArea from "./topArea/topArea";

export default function PLayArea(){
    return(
        <section id="PlayArea">
            <TopArea />
            <MiddleArea />
            <AudioPlayer />
        </section>
    )
}