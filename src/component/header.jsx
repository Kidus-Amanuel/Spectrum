import React from "react";
import Nav from "./navbar";


function Headers(){
    return(
        <header className="justify-center bg-[url('C:\Users\TOSHIBA\Desktop\spectrum\spectrum\src\files\download.jfif')]">
            <div className="justify-between items-top flex px-8 py-10 items-center">
                <h1 className="text-3xl justify-center items-center "> <span className="text-5xl justify-center">s</span>pectrum</h1>
                <div>
                <Nav/>
                </div>
            </div>
        </header>

    );

}

export default Headers;