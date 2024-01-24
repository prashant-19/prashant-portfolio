import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";


const footer = () => {
  return (
    <>
      <div className="hidden lg:block bg-gray-900 text-white w-[100%] py-16">
        <div className="flex flex-row mx-20 gap-96">
          <ul className="ml-20">

            <li>
              Copyright © 2024. All rights are reserved
            </li>
            </ul>
            <ul className="flex flex-row">
            <li className="">
              <FaLinkedin />
            </li>
            <li>
              <ImGithub />
            </li>
            </ul>

          
        </div>
      </div>
    </>
  );
};

export default footer;