import React from "react";
import { Link , Outlet } from "react-router-dom";
import Cards from "./cards";

function Package(){
    return(
        <div >
    <h1 className="text-4xl flex justify-center"> Package Offer </h1>
    <div className="flex flex-wrap justify-between mx-9 my-5">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>

    </div>
    <Outlet/>
    </div>


    );
    }

export default Package;