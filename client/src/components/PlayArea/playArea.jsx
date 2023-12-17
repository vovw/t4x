import { AudioPlayer } from "./bottomArea/bottomArea";
import MiddleArea from "./middleArea/middleArea";
import "./playArea.css";

export default function PLayArea(props){
    const {audioLink, promptsug, promptdata}= props
    return(
        <section id="PlayArea">
            <MiddleArea promptdata={promptdata} promptsug={promptsug}/>
            <AudioPlayer audioLink={audioLink}/>
        </section>
    )
}