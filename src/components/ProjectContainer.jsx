import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectContainer({ proj_title, proj_img, git_link, demo_link }) {
  return (
    <div className="p-4 flex flex-col gap-4 items-center">
      <div className="proj-title text-xl">{proj_title}</div>
      <div className="proj-img-cont">
        <div className="proj-img rounded-md flex items-center justify-center">
          <img src={proj_img} className=" object-cover w-2/3 rounded-md" />
        </div>
      </div>
      <div className="buttons flex gap-4">
        <Link
          to={git_link}
          target="_blank"
          className="p-2 px-4 rounded-md border-2 flex items-center gap-2 hover:bg-white hover:text-[#0e1c26] transition-all ease-in-out">
          <FaGithub />
          GitHub
        </Link>
        <Link
          to={demo_link}
          target="_blank"
          className="p-2 px-4 rounded-md border-2 bg-[#0099FF] border-[#0099FF]">
          Demo
        </Link>
      </div>
    </div>
  );
}

export default ProjectContainer;
