import React from "react";
import { AiTwotoneSnippets } from "react-icons/ai";
import img from "../../images/pexels-danny-meneses-943096.jpg"
import resume from "../../images/Prashant_Resume.pdf"

const Aboutme = () => {
  return (
    <div >
    <div id="about" className=" flex flex-col-reverse lg:flex-row-reverse bg-gray-300 py-20 px-12 md:px-44 ">
       <div className=" basis-1/2  lg:mx-10">
       <p className="text-center text-3xl pt-6 lg:pt-0 lg:text-left font-bold lg:text-4xl ">About <span className=" text-blue-500" >Me</span></p>
        <p className="text-justify pt-4 lg:text-2xl lg:pt-6 ">Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Qui reiciendis eos 
          saepe labore dicta reprehenderit odit 
          commodi natus illo. Enim reprehenderit error 
          sed molestias consequatur inventore corrupti
          voluptatem quis voluptatum?</p> 

          <a href={resume} download="Prashant_Resume">
          <button className="lg:mt-8 lg:mx-0 mx-20 mt-6 flex flex-row text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl text- 
                    px-4 py-4 lg:px-8 lg:py-5 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700"> 
          <AiTwotoneSnippets className="w-6 h-6 text-white pr-1" />
          Download CV 
          </button>
          </a>

       </div>
      <div className=" basis-1/2 lg:mx-10 ">
        <div className="">
        <img className="rounded-2xl" src={img} alt="" />
        </div>
      </div>

    </div>
    </div>
  );
};

export default Aboutme;
