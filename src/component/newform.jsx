import React from "react";

function NewForm(){
    return(<div>
        <div className="flex flex-col h-[600px]">
        <form  className="flex flex-col justify-center content-center  w-[600px] mx-auto my-auto rounded-lg bg-black  bg-opacity-5 px-3">
        <h1 className="text-2xl my-3 text-center"> Welcome to sepctrum customer service </h1>
        <span className="text-xl my-4">Customer Name</span><input></input>
        <span className="text-xl my-4">Customer Number</span><input></input>
        <span className="text-xl my-4">Customer house number</span><input></input>
        <div className="flex justify-between my-5">
        <div>
        <span className="text-xl my-4">Speed  </span>
        <select>
            <option value="1Mbps">1Mbps 370ETB</option>
            <option value="2Mbps">2Mbps 470ETB</option>
            <option value="3Mbps">3Mbps 650ETB</option>
            <option value="4Mbps">4Mbps 850ETB</option>
            <option value="5Mbps">5Mbps 1000ETB</option>
            <option value="6Mbps">6Mbps 1200ETB</option>
            <option value="8Mbps">8Mbps 1500ETB</option>
            <option value="10Mbps">10Mbps 1700ETB</option>
        </select>
        </div>
        <div>
        <span className="text-xl my-4">location  </span>
        <select>
        <option value="Figa">Hacomal Fame, Figa</option>
        <option value="Hayat Condominium">Meri 40/60 Condominium</option>
        <option value="Noah Figa">Noah real estate, Figa</option>
        <option value="Noah Green park">Noah green park, Tafo</option>
        <option value="49">49 site2 40/60 Condominium </option>
        <option value="Tafo">Hacomal Habesha Tafo</option>
        <option value="TG Apartment">Tg Apartment, Figa</option>
        <option value="Gift">Gift Real Estate, Ayat</option>
        <option value="Bole">Impress hotel building, Bole</option>
        </select>
        </div>
        </div>
        <button className=" rounded-2xl text-xl px-4 mt-4 mb-3 p-2  content-center hover:bg-gray-400 text-white bg-black">Submit</button>
        </form>
        <div className="flex flex-col justify-center mx-auto ">
        </div>
        
    
    </div>

    </div>);
}

export default NewForm;