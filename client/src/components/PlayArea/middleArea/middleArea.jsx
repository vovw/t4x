// import "./middleArea.css";

// export default function MiddleArea() {
//     return (
//         <section id="MiddleArea" className="flex flex-row justify-center mt-10 rounded-3xl">
//             <div className="flex flex-row someMainArea rounded-3xl p-6">
//                 <div className="stableDiffusion">
//                     <img src={require("../../../images/wp8130803.webp")} alt="" className="rounded-3xl" />
//                 </div>
//                 <div className="songDetails flex flex-col justify-start items-center gap-10 p-8 ">
//                     <p className="songName text-5xl">Tokyo Rain v1</p>
//                     <p className="songDes">welcome to the song details and descriptions about it</p>
//                     <div className="musicModBtn flex flex-row gap-6">
//                         <button>high speed</button>
//                         <button>low pitch</button>
//                         <button>lo-fi</button>
//                         <button>high bass</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
import "./middleArea.css";

export default function MiddleArea(props) {
  const { promptsug, promptdata } = props;
  return (
    <section className="text-gray-400 bg-transparent body-font px-32">
      <div className="container mx-auto flex px-30 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded-lg h-100"
            alt="hero"
            src="https://random.imagecdn.app/500/500"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {promptdata.toUpperCase()}
          </h1>
          <div className="flex justify-center">
            {promptsug.map((item) => (
              <button className="mr-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {item.toString()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}