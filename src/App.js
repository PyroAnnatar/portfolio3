import React from "react";

const App = () => {
  return (
    <div className="overflow-auto bg-[#FFDD55]">
      {/* First */}
      <div className="flex flex-col gap-4 pt-40 px-4 sm:pt-16 h-screen sm:justify-center lg:w-5/6 lg:mx-auto">
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
            <img src="/Hamburger_MD.png" alt="Hammy menu" />
          </a>
        </nav>
        <h1 className="font-extrabold text-[30px] md:text-[48px] leading-tight flex flex-col text-[#18191F]">
          Hello,
          <span>I'm Namık Korona</span>
        </h1>
        <div className="text-[#474A57] font-semibold text-[20px] md:text-[25px] xl:flex ">
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
                <img src="/insta color.png" alt="Instagram link" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/facebook color.png" alt="Facebook link" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/twitter color.png" alt="Twitter link" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="/youtube color.png" alt="Youtube link" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-white text-[18px] font-bold flex gap-6 pt-4 z-10">
          <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
            <a href="#">Hire me</a>
          </button>
          <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
            <a href="#">Download CV</a>
          </button>
        </div>
      </div>
      {/* Second */}
      <div className="h-screen overflow-hidden p-10 flex justify-center items-center">
        <div className="bg-[#106EE8] rounded-[20px] w-full px-20 py-28 flex gap-20 items-center">
          <div className="w-full max-w-[310px] sm:max-w-[285px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[480px]">
            <img src="/avatar 2.png" alt="Hipster avatar" className="w-full" />
          </div>
          <div className="text-white font-extrabold text-[64px] flex flex-col gap-4">
            <h2>About Me</h2>
            <div className="text-[#FFDD55] font-bold text-[32px] leading-tight">
              <h3>UI/UX Designer</h3>
              <h3>React Developer</h3>
            </div>
            <p className="font-bold text-[24px] max-w-[650px]">
              Hello! I'm a UI/UX designer and React developer. Dive into my
              portfolio to discover a fusion of elegant design and seamless
              react development. Welcome to a world where creativity meets
              functionality!
            </p>
            <div className="text-white items-center text-[18px] font-bold flex gap-8 pt-4 z-10">
              <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
                <a href="#">Hire me</a>
              </button>
              <button className="bg-black py-2 px-5 rounded-[15px] shadow-[5px_5px_0_rgba(0,198,174,1)] hover:text-[#FFDD55] duration-200">
                <a href="#">Download CV</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Third */}
      <div className="h-screen overflow-hidden p-14 flex flex-col gap-20 justify-center items-center bg-[#EB7711]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="font-extrabold text-black text-[64px]">Services</h2>
          <p className="text-white font-bold text-[24px] text-center w-3/4">
            Embark on a journey of digital transformation with services that
            blend design brilliance with cutting-edge development. Let's create
            experiences that resonate and applications that captivate.
          </p>
        </div>

        <div className="flex justify-center items-stretch text-white gap-40 w-full">
          <div className="relative pt-20 flex flex-col items-center justify-center gap-6 w-2/3 bg-[#A259FF] p-10 border-[3px] border-black shadow-[5px_5px_0_rgba(0,0,0,1)] rounded-[20px]">
            <div className="absolute text-[96px] font-extrabold flex justify-center items-center -top-16 left-[50%] -translate-x-[50%] w-[132px] h-[132px] rounded-full text-white bg-[#0ACF83]">
              1
            </div>
            <h3 className="text-[40px] font-extrabold text-center">
              UI/UX Designer
            </h3>
            <p className="text-[26px] font-bold">
              Crafting captivating interfaces that resonate. From wireframes to
              polished designs, I make sure your digital presence stands out
              with user-centric creativity.
            </p>
            <button className="bg-[#FFDD55] py-3 px-6 w-5/6 rounded-[10px] text-black text-[32px] font-bold">
              Learn More
            </button>
          </div>
          <div className="relative pt-20 flex flex-col items-center justify-center gap-6 w-2/3 bg-[#A259FF] p-10 border-[3px] border-black shadow-[5px_5px_0_rgba(0,0,0,1)] rounded-[20px]">
            <div className="absolute text-[96px] font-extrabold flex justify-center items-center -top-16 left-[50%] -translate-x-[50%]  w-[132px] h-[132px] rounded-full text-white bg-[#0ACF83]">
              2
            </div>
            <h3 className="text-[40px] font-extrabold text-center">
              React Developer
            </h3>

            <p className="text-[26px] font-bold">
              Turning app ideas into reality. As a React developer, I build
              sleek, cross-platform applications for a seamless user experience
              and efficient performance.{" "}
            </p>
            <button className="bg-[#FFDD55] py-3 px-6 w-5/6 rounded-[10px] text-black text-[32px] font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Fourth */}
      <div className="h-screen overflow-hidden flex justify-center items-center bg-[#FFDD55]">
        <div className="bg-[#0ACF83] text-white p-10 w-full text-center h-2/3 flex flex-col justify-center items-center gap-10">
          <p className="text-[42px] font-extrabold">
            If you have any queries or project ideas feel free to
          </p>
          <button className="bg-[#FFDD55] text-black text-[64px] font-bold py-4 px-32 rounded-[47px] shadow-[-25px_33px_4.2px_rgba(0,0,0,1)]">
            Contact Me
          </button>
        </div>
      </div>
      {/* Fifth */}
      <div className="h-screen relative overflow-hidden flex flex-col justify-center items-center gap-10 bg-[#FFDD55]">
        <div className="flex justify-center items-center gap-10">
          <div className="w-[100px] h-[100px] text-[64px] font-extrabold text-center text-[#18191F]">
            <div className="relative h-[96px] w-[96px] rounded-full bg-white border-[1.56px] border-black">
              <div className="absolute h-[96px] w-[96px] rounded-full bg-[#FFDD55] border-[1.56px] border-black bottom-1 right-1 z-10">
                A
              </div>
            </div>
          </div>
          <h2 className="text-[48px] font-extrabold">Namık Korona</h2>
        </div>
        <p className="text-[40px] font-bold w-2/3 text-center">
          I work at the speed of a mlem. You'll love my memes, contact me and
          let's work together.
        </p>
        <div className="flex justify-center items-center gap-4">
          <div>
            <a href="#">
              <img src="/insta color.png" alt="Instagram" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/facebook color.png" alt="Facebook" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/twitter color.png" alt="Twitter" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/youtube color.png" alt="Youtube" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-full font-medium text-sm md:text-[25px] py-3 px-5">
          <div className="flex justify-start items-center gap-2 grow-[3]">
            <div>
              <img src="vector.png" alt="Pin" />
            </div>
            <span>Türkiye</span>
          </div>

          <span className="grow-[2] text-center">
            © 2024, All rights reserved by Doge.
          </span>
          <ul className="flex gap-4 text-[#3B5999]">
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
