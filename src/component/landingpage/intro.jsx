import React from "react";
import { FcContacts } from "react-icons/fc";
import img from "../../images/pexels-danny-meneses-943096.jpg"
import "../../component/landingpage/intro.css"

const intro = () => {

    const headerHeight = 75; // Change this value to your actual header height

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop - headerHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div id="home" className="md:min-h-screen flex flex-col-reverse pb-20 md:flex-row bg-gray-200 md:px-56 ">
                <div className=" basis-1/2 mx-10  lg:my-56 md:mx-10">
                    <p className="text-3xl text-center md:text-5xl font-bold md:text-left">Hey! I'm <span className=" text-3xl lg:text-5xl text-blue-500">Prashant</span></p>
                    <p className="md:text-xl text-justify md:text-left py-4 md:py-4 text-gray-700">I am Full Stack Developer and my portfolio includes work in <span className=" text-blue-700">C++</span>, <span className=" text-blue-700">React</span> and <span className=" text-blue-700">Node.js</span>.
                    </p>

                    <button onClick={() => scrollToSection('contact')}
                        className="flex flex-row mx-auto lg:mt-2 lg:mx-0 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl 
                              px-4 py-4 dark:bg-gray-800 dark:hover:bg-gray-700
                             dark:focus:ring-gray-700 dark:border-gray-700">

                        <div >
                            <FcContacts className="pr-1 w-6 h-6" />
                        </div>
                        <div className="">
                            Contact Me
                        </div>
                    </button>
                </div>

                <div className= "basis-1/2 md:my-24 md:px-8">
                    <div className="blob ">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default intro;