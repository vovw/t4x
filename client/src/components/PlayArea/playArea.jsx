import { AudioPlayer } from "./bottomArea/bottomArea";
import MiddleArea from "./middleArea/middleArea";
import "./playArea.css";

export default function PLayArea(props){
    const {audioLink}= props
    return(
        <section id="PlayArea">
            <MiddleArea />
            <AudioPlayer audioLink={audioLink}/>
        </section>
    )
}