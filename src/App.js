import React from "react";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#FFDD55] pt-28 p-7 sm:pt-16">
      <nav className="bg-black flex justify-between items-center py-5 px-8 rounded-b-[35.6px] absolute w-full top-0 left-0">
        <a href="#">
          <img src="/logo.png" alt="Logo" />
        </a>
        <ul className="text-white font-semibold text-[36px] md:flex gap-6 hidden lg:gap-8 lg:pr-4">
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-200">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFDD55] duration-200">
              Team
            </a>
          </li>
        </ul>
        <a href="#" className="md:hidden inline">
          <img src="/hamburger_MD.png" alt="Hammy menu" />
        </a>
      </nav>
      <div className="flex flex-col gap-4 pt-8 h-screen sm:justify-center lg:w-5/6 lg:mx-auto">
        <h1 className="font-extrabold text-[48px] leading-tight flex flex-col">
          Hello,
          <span>I'm</span>
        </h1>
        <div className="text-[#474A57] font-semibold text-[25px] xl:flex ">
          <h2>UI/UX Designer</h2>
          <span className="hidden xl:inline">,&nbsp;</span>
          <h2>React Developer</h2>
        </div>

        <div className="flex justify-start items-end gap-2 max-w-[310px] sm:absolute right-6 sm:max-w-[285px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[480px] lg:right-36 xl:right-48 ">
          <div className="">
            <img src="/avatar.png" alt="Hipster avatar" />
          </div>

          <div className="flex flex-col gap-4 pb-4">
            <div>
              <a href="#">
                <img src="/Component 1.png" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/Component 2.png" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/Component 3.png" alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/Component 4.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-white  text-[18px] font-bold flex gap-6 pt-4 sm:gap-4 z-10">
          <a href=""></a>
          <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
            <a href="#">Hire me</a>
          </button>
          <a href=""></a>
          <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
