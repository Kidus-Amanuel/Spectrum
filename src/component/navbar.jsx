import React from "react";
import {Link , outlet} from "react-router-dom";

function Nav(){

    return(
        <div>
        <ul className="flex justify-centre items-center px-3 mx-5 gap-10 text-xl">
                <Link className="hover:bg-gray-700 hover:text-white p-2 rounded-lg " to={"/"}>HOME</Link>
                <Link className="hover:bg-gray-700 hover:text-white p-2 rounded-lg " to={"/Packages"}>ORDER</Link>
                <Link className="hover:bg-gray-700 hover:text-white p-2 rounded-lg " to={"/Contact"}>CONTACT-US</Link>
                <Link className="hover:bg-gray-700 hover:text-white p-2 rounded-lg " to={"/About"}>ABOUT</Link>
                <button>
                <Link className="hover:bg-white hover:text-black p-2 rounded-lg bg-black text-white" to={"/Login"}>LOGIN</Link>
                </button>
        </ul>
        </div>
    );
}
export default Nav;