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
            <div className=" pt-10 pb-20 bg-gray-200 ">

                <p className="text-center font-bold text-4xl">My Skills</p>

                <ul className=" flex flex-wrap mx-5  lg:mx-80 gap-y-3 gap-x-2 justify-center mt-10">

                    {Skill.map((item, index) =>
                    
                        <li key={index} className='  border-2 border-gray-400 hover:bg-slate-300 px-4 text-sm py-2 rounded-3xl'
                        onClick={() => handleItemClick(index)}>
                            {item}
                                                        
                        </li>

                    )}
                </ul>

            </div>

        </>
    );
};

export default skills;