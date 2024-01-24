import React from "react";

const skills = () => {


    let Skill = [
        "HTML", "CSS"
        , 'JavaScript'
        , 'React'
        , 'Tailwind Css'
        , 'Node.js'
        , 'Express.js'
        , 'Data Structures'
        , 'C'
        , 'C++'
        , 'STL'
        , 'Scoket Programming'
        , 'Python'
        , 'Photoshop'
        , 'Linux'
        
    ]


    const handleItemClick = (index) => {
        console.log("Clicked on item at index:", index);
    };


    return (
        <>
            <div className=" pt-16 lg:pt-24 lg:pb-14 bg-gray-200 ">

                <p className="text-center font-semibold text-3xl lg:text-4xl">Skills</p>

                <ul className=" flex flex-wrap mx-5  lg:mx-80 gap-y-3 gap-x-2 justify-center mt-10">

                    {Skill.map((item, index) =>
                    
                        <li key={index} className='  border-2 border-gray-400 hover:bg-slate-300 px-4 text-sm py-2 rounded-3xl'
                        onClick={() => handleItemClick(index)}>
                            {item}
                                                        
                        </li>

                    )}
                </ul>

            </div>

            <div className="hidden lg:block bg-gray-200">
                <p className=" border-b-4 bg-[#889c8d] border-dashed mx-80"></p>
            </div>

        </>
    );
};

export default skills;