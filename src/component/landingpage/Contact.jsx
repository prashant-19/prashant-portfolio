import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Form from "./form";


const Contact = () => {

    let data = [

        { name: " LinkedIn", logo: <FaLinkedinIn />, link: "https://www.linkedin.com/feed/" },
        { name: " Github" , logo: <FaGithub />, link:""},
        { name: " Gmail" , logo: <SiGmail />, link:"mailto:prashant.my10@gmail.com?subject = Feedback&body = Message"},

    ]
    return (
        <>
            <div id="contact" className="bg-gray-200 pt-20">
                <p className="text-left font-bold text-4xl mx-32 mb-20 pl-4 pb-1 border-l-4 border-blue-400" > Contact </p>

                <div className="flex flex-row">

                    <div className="flex flex-wrap basis-1/2 mx-32 mb-32 gap-x-8 gap-y-8">
                        {
                            data.map((item, index) =>
                            <Link key={index} to={item.link} target="_blank">

                            <div className="flex flex-col lg:flex-row mx-auto mt-2 lg:mx-0 text-black shadow-xl border-2 border-gray-400   font-semibold rounded- 
                            px-26 py-12 lg:w-56 lg:h-24 justify-center items-center hover:scale-105 hover:shadow-xl hover: transition-transform duration-300 ease-in-out">
                            
                                <div className="pr-2">
                                            {item.logo}  
                                        </div>
                                        <div  className=" ">
                                    
                                        {item.name} 

                                    </div>

                                
                                
                                </div>
                                </Link>

                            )
                        }
                    </div>




                    <div className=" basis-1/2 ">
                        <Form/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;