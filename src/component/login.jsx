import React from "react";
import { Link } from "react-router-dom";


function Login(){
    return(
<div className="flex flex-col h-[400px]">
    <form  className="flex flex-col justify-center content-center  w-[600px] mx-auto my-auto rounded-lg bg-black  bg-opacity-5 px-3">
    <h1 className="text-2xl my-3 text-center"> Welcome to sepctrum customer service </h1>
    <span className="text-xl my-4">Customer Name</span><input></input>
    <span className="text-xl my-4">Customer Number</span><input></input>
    <button className=" rounded-2xl text-xl px-4 mt-4 mb-3 p-2  content-center hover:bg-gray-400 text-white bg-black">Submit</button>
    </form>
    <div className="flex flex-col justify-center mx-auto ">
    <Link className="hover:bg-gray-300 hover:text-black p-2 text-xl rounded-lg bg-gray-700 text-white mb-6"  to={"/Packages"}>New-customer</Link>
    </div>
    

</div>);
}

export default Login;