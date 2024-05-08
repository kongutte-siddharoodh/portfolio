import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer flex items-center justify-between p-5 px-20 bottom-0">
      <div className="social-links flex items-center gap-4">
        <div className="linkd-icon p-2 border-2 border-white rounded-[50%]">
          <Link
            to="https://www.linkedin.com/in/kongutte-siddharoodh-a820232a7/"
            target="_blank">
            <FaLinkedinIn className="text-white" />
          </Link>
        </div>
        <div className="insta-icon p-2 border-2 border-white rounded-[50%]">
          <Link
            to="https://www.instagram.com/siddhu_vk_7?igsh=eHN2NnVkN2l5aG9i"
            target="_blank">
            <GrInstagram className="text-white" />
          </Link>
        </div>
      </div>
      <div className="copyright text-xs">
        Copyright &copy; 2024 By KS | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
