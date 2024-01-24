import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";


const footer = () => {
  return (
    <>
      <div className=" bg-gray-900 text-white w-[100%] py-16">
        <div className="flex flex-col lg:flex-row gap-y-5 md:gap-y-0">
          <ul className="basis-1/2 flex md:ml-44 justify-center lg:justify-start">

            <li>
              Copyright © 2024. All rights are reserved
            </li>
            </ul>
            <ul className="basis-1/2 md:mr-44 flex flex-row gap-5 justify-center lg:justify-end">
            <li className="">
              <button><Link to={"https://www.linkedin.com/feed/"} target="_blank">
              <FaLinkedin className="w-8 h-8"/>

              </Link>

              </button>
            </li>
            <li>
              <button>
              <Link to={"https://github.com/prashant-19"} target="_blank">
              <ImGithub className="w-8 h-8"/>
              </Link>
              </button>
            </li>
            </ul>

          
        </div>
      </div>
    </>
  );
};

export default footer;