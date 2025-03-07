import React from "react";
import {FaYoutube ,FaFacebook ,FaTelegram ,FaInstagram } from "react-icons/fa";


function Footer(){
    return(
        <footer className="justify-center bg-[url('C:\Users\TOSHIBA\Desktop\spectrum\spectrum\src\files\download.jfif')] bg-contain">
            <div className="justify-between items-top flex px-8 py-10 items-center">
            <div>
            <h1 className="text-4xl"> <span className="text-6xl">s</span>pectrum</h1>
            <p className="md:text-sm w-[335px] text-wrap my-3 text-20 ">spectrum provides high-speed wi-fi network managment to residences. we can transform wi-fi form commodity to business value.</p>
            </div>

            <div>
            <h1 className="text-4xl mb-3">Navigation</h1>
            <h2>About us</h2>
            <h2>contact</h2>
            <h2>packages</h2>
            </div>

            <div>
            <h1 className="text-4xl mb-3">Get in Touch</h1>
            <h2>customer servies</h2>
            <h2>new customer</h2>
            <h2>report</h2>
            </div>

            <div>
            <ul>
            <li className="flex items-center gap-3"><FaFacebook className=" text-xl my-2 "/> spectrum</li>   
            <li className="flex items-center gap-3"><FaTelegram className=" text-xl my-2 "/>spectrum</li>
            <li className="flex items-center gap-3"><FaYoutube className=" text-xl my-2 "/>spectrum</li>
            <li className="flex items-center gap-3"> <FaInstagram className=" text-xl my-2 "/>spectrum</li>
            </ul>
            </div>
            </div>
        </footer>);

    }

    export default Footer;