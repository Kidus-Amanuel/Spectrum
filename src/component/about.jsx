import React from "react";
import { Link , Outlet } from "react-router-dom";
import Contact from "./contact";

function About(){
    return(
        <div>
        <h1>hello</h1>
        <Link className="hover:bg-gray-700 hover:text-white p-2 rounded-lg " to={'/Contact'} element={<Contact/>}>CONTACT US</Link>
        <Outlet/>
        </div>

    );
}

export default About;