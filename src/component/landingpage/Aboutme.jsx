import React from "react";
import { AiTwotoneSnippets } from "react-icons/ai";


const Aboutme = () => {
  return (
    <>
    <div className=" flex flex-row-reverse bg-gray-300 py-20 px-44 ">
       <div className=" basis-1/2  ">
       <p className="text-left font-bold text-4xl ">About <span className=" text-blue-500" >Me</span></p>
        <p className="text-left text-2xl pt-10 ">Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Qui reiciendis eos 
          saepe labore dicta reprehenderit odit 
          commodi natus illo. Enim reprehenderit error 
          sed molestias consequatur inventore corrupti
          voluptatem quis voluptatum?</p> 

          <button className="mt-8 flex flex-row text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl text- 
                    px-8 py-5 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700"> 
          <AiTwotoneSnippets className="w-6 h-6 text-white pr-1" /> CV </button>
       </div>
      <div className=" basis-1/2">

      </div>

    </div>
    </>
  );
};

export default Aboutme;
