import React from "react";
import {Outlet ,useNavigate } from "react-router-dom";

function Cards(){
    const navgaters= useNavigate();
    return(
        <div className=" bg-gray-500 text-white hover:w-[400px] hover:h-[450px] w-[350px] h-[400px] rounded-3xl my-5">
        
        <div className="flex flex-col justify-center ">
            <h1 className="flex justify-center mt-3 text-5xl text-pretty pt-11"><span className="text-7xl">3</span>mbs</h1>
            <h2 className="flex justify-center mt-3  text-xl">support 24/7</h2>
            <h2 className="flex justify-center mt-3 text-xl text-pretty">highly reliable</h2>
            <h1 className="flex justify-center mt-3 text-xl text-pretty">500<span>installition</span></h1>
            <h1 className="flex justify-center mt-3 text-xl text-pretty">350<span>/month</span></h1>
            <button onClick={()=>{navgaters("/Packages/NewForm")}} className=" my-4 hover:bg-white text-white hover:text-black p-2 rounded-lg bg-gray-700  flex justify-center mx-auto ">Order-Now</button>
            <Outlet/>
        </div>
        
        </div>

    );
}

export default Cards;