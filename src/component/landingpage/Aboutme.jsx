import React from "react";
import { AiTwotoneSnippets } from "react-icons/ai";
import img from "../../images/pexels-danny-meneses-943096.jpg"
import resume from "../../images/Prashant_Resume.pdf"
import AboutmePhone from "./AboutmePhone";

const Aboutme = () => {
  return (
    <div id="about">
      <div className="hidden md:block">
        <div className=" flex flex-col-reverse lg:flex-row-reverse bg-gray-300 py-14 lg:py-20 px-12 md:px-36">
          <div className=" basis-1/2  lg:mx-10">
            <p className="text-left  text-3xl mt-7 lg:pt-0 lg:mt-3 font-semibold lg:text-4xl pb-1 pl-4 border-l-4 border-blue-400 ">About Me</p>
            <p className="text-justify pt-4 lg:text-lg lg:pt-5 text-gray-900 ">I am a versatile software developer, working professionally since January 2023.
              Currently employed as a Full Stack Developer at Rhizobee Innovations where
              I am leveraging my skills to develop their platform.
              I am comfortable in both Windows and Linux environments.
              My project portfolio also includes work in <span className=" text-blue-900">C++</span>,
              <span className=" text-blue-900"> React</span>, and <span className=" text-blue-900">Node.js</span>,
              showcasing my commitment to excellence and adaptability in the dynamic realm of software development.
              Coding is my professional forte, where I thrive in crafting digital solutions.
              Apart from this, Music is my constant companion with diverse genres.
              I love travelling which provides new perspectives and
              enriching experiences that compliment my love for music.<br />
              <span className=" text-blue-900">Let's connect to discuss potential synergies and explore opportunities together.</span></p>

            <div className="">
              <a href={resume} download="Prashant_Resume" className="inline-block" >
                <button className="lg:mt-4 lg:mx-0 mx-14 mt-6 flex flex-row text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl text- 
                    px-4 py-4 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700">
                  <AiTwotoneSnippets className="w-6 h-6 text-white pr-1" />
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className=" basis-1/2 lg:mx-10 lg:my-14">
            <div className="">
              <img className="rounded-2xl" src={img} alt="" />
            </div>
          </div>

        </div>
      </div>

      <AboutmePhone />
    </div>

  );
};

export default Aboutme;
