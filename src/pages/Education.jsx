import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EducationCard from "../components/EducationCard";

function Education() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="education-cards px-20 font-semibold flex flex-wrap justify-between items-center mx-8">
        <EducationCard
          year="2022"
          education="BE, Aeronautical"
          instituteName="MVJ College Of Engineering, Bengaluru"
        />
        <EducationCard
          year="2018"
          education="12th (Science)"
          instituteName="Guru Nanak Independent PUC, Bidar"
        />
        <EducationCard
          year="2016"
          education="10th (SSLC)"
          instituteName="Smt. IGSH School, Bidar"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Education;
