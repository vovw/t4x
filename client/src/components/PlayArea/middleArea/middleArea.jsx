import "./middleArea.css";

export default function MiddleArea(){
    return(
        <section id="MiddleArea" className="flex flex-row justify-">
            <div className="stableDiffusion">
                <img src={require("../../../images/wp8130803.webp")} alt="" /> 
            </div>
            <div className="songDetails">
                <p>Tokyo Rain v1</p>
            </div>
        </section>
    )
}