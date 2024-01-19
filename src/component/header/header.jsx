import React from "react";


const Header = () => {
  const headerHeight = 80; // Change this value to your actual header height

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

    return (
      <>
      <div className=" bg-gray-900 w-full  left-0 sticky top-0 z-10 py-6 shadow-5xl">
        <ul className=" flex flex-row space-x-8 justify-center text-lg font-semibold text-cyan-50">
            <li><button className=" cursor-pointer" onClick={() => scrollToSection('home')}>Home</button></li>
            <li ><button className=" cursor-pointer" onClick={() => scrollToSection('about')}>About</button></li>
            <li ><button className=" cursor-pointer" onClick={() => scrollToSection('project')}>Project</button></li>
            <li ><button className=" cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      
      </div>
      </>
    );
  };
  
  export default Header;
  
