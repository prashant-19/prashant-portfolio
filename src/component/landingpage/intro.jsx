import React from "react";
import { FcContacts } from "react-icons/fc";
import img from "../../images/pexels-danny-meneses-943096.jpg"
import "../../component/landingpage/intro.css"

const intro = () => {

    const headerHeight = 95; // Change this value to your actual header height

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop - headerHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div id="home" className="md:min-h-screen flex flex-col-reverse px-2 pb-20 md:flex-row bg-gray-200 md:px-56 ">
                <div className=" basis-1/2 mx-10  md:my-48 md:mx-10">
                    <p className="text-4xl text-center md:text-5xl font-bold md:text-left">Hey! I'm <span className=" text-4xl text-blue-500">Prashant</span> 👋🏻 </p>
                    <p className="md:text-2xl text-justify py-4 md:py-4">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Qui reiciendis eos
                        saepe labore dicta reprehenderit odit
                        commodi natus illo.
                    </p>

                    <button onClick={() => scrollToSection('contact')}
                        className="flex flex-row mx-24 mt-2 lg:mx-0 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-semibold rounded-2xl 
                              px-4 py-4 lg:px-8 lg:py-5 dark:bg-gray-800 dark:hover:bg-gray-700
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