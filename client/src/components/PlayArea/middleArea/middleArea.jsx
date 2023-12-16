import "./middleArea.css";

export default function MiddleArea() {
    return (
        <section id="MiddleArea" className="flex flex-row justify-center mt-10 rounded-3xl">
            <div className="flex flex-row someMainArea rounded-3xl p-6">
                <div className="stableDiffusion">
                    <img src={require("../../../images/wp8130803.webp")} alt="" className="rounded-3xl" />
                </div>
                <div className="songDetails flex flex-col justify-start items-center gap-10 p-8 ">
                    <p className="songName text-5xl">Tokyo Rain v1</p>
                    <p className="songDes">welcome to the song details and descriptions about it</p>
                    <div className="musicModBtn flex flex-row gap-6">
                        <button>high speed</button>
                        <button>low pitch</button>
                        <button>lo-fi</button>
                        <button>high bass</button>
                    </div>
                </div>
            </div>
        </section>
    )
}