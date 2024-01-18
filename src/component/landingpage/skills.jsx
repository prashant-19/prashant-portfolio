import React from "react";

const skills = () => {
    let Skill = [
        
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Tailwind Css' },
        { name: 'Node.js' },
        { name: 'Data Structures' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'STL' },
        { name: 'Scoket Programming' },
        { name: 'Python' },
        { name: 'Photoshop' },
        { name: 'Linux' },
    ]
    return (
        <>
            <div className="hidden sm:block pt-10 pb-20 bg-gray-200 ">
              
                <p className="text-center font-bold text-4xl">My Skills</p>
                
                <ul className=" flex flex-wrap lg:mx-96 gap-y-3 gap-x-2 justify-center mt-10">

                    {Skill.map((item) =>
                        <li className='  border-2 border-gray-400 hover:bg-slate-300 px-4 text-sm py-2 rounded-3xl'>
                            {item.name}
                        </li>

                    )}
                </ul>

            </div>

        </>
    );
};

export default skills;