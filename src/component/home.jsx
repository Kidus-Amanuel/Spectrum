import React from "react";
import Img1 from "../files/spectrurm1.png"
import Img2 from "../files/spectrum2.jpg"
import { useNavigate} from "react-router-dom";
// <img src={Img1} alt="spectrum wifi" className="rounded-xl"/>

function Home(){
    const navgiatess = useNavigate();
    return(
        <div className="bg-[url('C:\Users\TOSHIBA\Desktop\spectrum\spectrum\src\files\spectrurm1.png')] bg-cover">
        <div className=" flex flex-col justify-center content-center ">
        
        <div className=" mt-96 ml-5 text-white w-[400px]  bg-black bg-opacity-10 hover:bg-opacity-20">
            <h1 className="text-8xl my-10 w-[400px]"> <span className="text-10xl">S</span>PECTRUM</h1>
            <p className="text-white  text-2xl  w-[400px] text-wrap my-3 ">spectrum provides high-speed wi-fi where we prioritize your online experience above all else. With lightning-fast speeds, reliable connections, and top-notch customer service, we make sure you stay connected to what matters most. Choose us for seamless browsing, streaming, and communication - because when you choose us, you choose excellence.

            </p>
        </div>
        
        <div className=" mb-55 mt-12 ml-10">
        <button onClick={()=>{navgiatess("/Packages")}} className=" rounded-2xl text-4xl px-4 my-7 p-2  content-center hover:bg-gray-400 text-white bg-black">Order-Now</button>
        </div>

        </div>
        </div>
    );
}
export default Home;