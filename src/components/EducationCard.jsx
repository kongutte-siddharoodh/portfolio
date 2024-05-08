import React from "react";
import { FaAward } from "react-icons/fa6";

function EducationCard({ year, education, instituteName }) {
  return (
    <div className="ed-card flex items-center gap-5 p-3 border-2 border-white rounded-md w-[327.7px] h-[128px]">
      <div>
        <FaAward className="text-3xl" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="year text-[#0099FF] font-extrabold text-lg">{year}</div>
        <div className="name-edu text-xl">{education}</div>
        <div className="institute-place text-sm">{instituteName}</div>
      </div>
    </div>
  );
}

export default EducationCard;
