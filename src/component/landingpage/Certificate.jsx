import React from "react";
import { Link } from "react-router-dom";


const Certificate = () => {

    let data = [
        { name: "Operating Systems from scratch - Udemy", link: "https://udemy-certificate.s3.amazonaws.com/image/UC-0cedfc23-6202-4b2f-b037-501656ee6efa.jpg" },
        { name: "Java for Absolute Beginners - Udemy", link: "https://www.udemy.com/certificate/UC-45fd8c4e-0d16-421d-85df-0a1922c20b4d/" },
        { name: "Linux for beginners - Udemy", link: "https://www.udemy.com/certificate/UC-656da8a2-f703-4be3-bfea-8dbe9cd64b92/" },
        { name: "Build Websites from Scratch with HTML and CSS - Udemy", link: "https://www.udemy.com/certificate/UC-ee68fde2-48b5-4c29-b2bc-b9c6f30e83f1/" },
    ]

    return (
        <>
            <div className=" bg-gray-200 pb-20 lg:pb-32 pt-16 ">

                <div>
                    <p className="text-center font-semibold text-3xl lg:text-4xl">Certificates</p>

                    <div className="flex flex-wrap mx-5 lg:mx-80 gap-y-3 gap-x-2 justify-center mt-10">
                        {
                            data.map((item, index) =>

                                <Link key={index} to={item.link} target="_blank" className="border-2 border-gray-400 hover:bg-slate-300 px-4 text-sm py-2 rounded-3xl">
                                    <p className="font-semibold">{item.name}</p>
                                </Link>


                            )
                        }

                    </div>

                </div>

            </div>


        </>
    );
}

export default Certificate;