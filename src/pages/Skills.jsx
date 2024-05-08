import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { AiOutlinePython, AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssFill, RiBootstrapLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div className="skills-outer-container px-20 h-full font-semibold flex flex-col items-center justify-start gap-16">
        <div className="skills-header text-center font-bold text-3xl mt-6">
          My <span>Skills</span>
        </div>
        <div className="skills-container1 flex w-full items-start justify-around flex-wrap">
          <div className="prog-lang-container border-2 border-[#0099FF] rounded-md p-4 w-[272.16px] h-[150px]">
            <span className="prog-lang-header text-xl font-bold">
              Programming Langauges
            </span>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              JavaScript <TbBrandJavascript className="text-xl text-white" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              Python (Basics) <AiOutlinePython className="text-xl text-white" />
            </div>
          </div>
          <div className="frameworks-container border-2 border-[#0099FF] rounded-md p-4 w-[272.16px] h-[150px]">
            <span className="framework-header text-xl font-bold">
              CSS Frameworks
            </span>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              Tailwind CSS <RiTailwindCssFill className="text-xl text-white" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              Bootstrap <RiBootstrapLine className="text-xl text-white" />
            </div>
          </div>
          <div className="libraries-container border-2 border-[#0099FF] rounded-md p-4 w-[272.16px] h-[150px]">
            <span className="libraries-header text-xl font-bold">
              JavaScript Library
            </span>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              React.js <FaReact className="text-xl text-white" />
            </div>
          </div>
        </div>
        <div className="skills-container2 flex w-full items-start justify-evenly flex-wrap">
          <div className="mark-lang-container border-2 border-[#0099FF] rounded-md p-4">
            <span className="mark-lang-header text-xl font-bold">
              Markup Langauges
            </span>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              HTML (Hyper Text Markup Language){" "}
              <AiOutlineHtml5 className="text-xl text-white" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              CSS (Cascading Style Sheets){" "}
              <TbBrandCss3 className="text-xl text-white" />
            </div>
          </div>
          <div className="cloud-based-container border-2 border-[#0099FF] rounded-md p-4">
            <span className="cloud-based-header text-xl font-bold">
              Cloud Based Platforms
            </span>
            <hr />
            <div className="flex items-center gap-2 mt-4">
              GitHub (Social Coding Platform){" "}
              <FiGithub className="text-xl text-white" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              Netlify (Build, Deploy, and Host){" "}
              <SiNetlify className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
