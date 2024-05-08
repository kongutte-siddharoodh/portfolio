import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import Urban from "../assets/images/Urban-Hive-Project.png";
import Weather from "../assets/images/Weather-Projects.png";
import TicTacToe from "../assets/images/Tic-Tac-toe-Project.png";
import QuoteGenerator from "../assets/images/Quote-Generator-Project.png";
import MusicPlayer from "../assets/images/Music-Player-Project.png";

function Projects() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <div className="proj-outer px-20 font-semibold flex flex-col justify-start items-center h-[100%]">
        <div className="my-projects-header text-center font-bold text-3xl mt-6">
          My <span>Projects</span>
        </div>
        <div className="projects-container flex w-full flex-col mt-4 gap-4">
          <div className="react-proj-cont border-2 border-[#0099FF] p-4 rounded-md">
            <div className="reactproj-header text-2xl font-bold">
              <span>React</span> Projects
            </div>
            <div className="projs flex flex-col gap-4">
              <ProjectContainer
                proj_title="1. Urban Hive Ecommerce"
                proj_img={Urban}
                git_link="https://github.com/kongutte-siddharoodh/urban-hive-ecommerce"
                demo_link="https://urbanhive-ecommerce.netlify.app/"
              />
              <hr />
              <ProjectContainer
                proj_title="2. Weather App"
                proj_img={Weather}
                git_link="https://github.com/kongutte-siddharoodh/weather-project"
                demo_link="/"
              />
            </div>
          </div>
          <div className="html-css-js-proj-cont  border-2 border-[#0099FF] p-4 rounded-md">
            <div className="htmlproj-header text-2xl font-bold">
              <span>HTML, CSS and JavaScript</span> Projects
            </div>
            <div className="projs flex flex-col gap-4">
              <ProjectContainer
                proj_title="1. Tic Tac Toe"
                proj_img={TicTacToe}
                git_link="https://github.com/kongutte-siddharoodh/Tic-Tac-Toe.git"
                demo_link="https://kongutte-siddharoodh.github.io/Tic-Tac-Toe/"
              />
              <hr />
              <ProjectContainer
                proj_title="2. Random Quote Generator"
                proj_img={QuoteGenerator}
                git_link="https://github.com/kongutte-siddharoodh/Quote-Generator.git"
                demo_link="https://kongutte-siddharoodh.github.io/Quote-Generator/"
              />
              <hr />
              <ProjectContainer
                proj_title="3. Music Player"
                proj_img={MusicPlayer}
                git_link="/"
                demo_link="https://music-player-for-you.netlify.app"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
