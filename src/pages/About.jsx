import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/images/img-sid.png";

function About() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="about-container flex items-center justify-center">
        <div className="about-outer-container px-20 font-semibold w-3/4 flex flex-col items-center gap-4">
          <div>
            <img
              src={Image}
              className="rounded-[50%] border-2 border-white w-40 h-40"
            />
          </div>
          <div>
            <div className="text-center">
              Propelled by a passion for web development, I transitioned from
              Aeronautical Engineering to <span>Front-End Development</span>{" "}
              during the COVID lockdown. Through <span>online courses</span> and{" "}
              <span>independent learning</span>, I honed my skills in
              technologies that bring websites to life. I'm eager to leverage my
              knowledge and innovative ideas at a top company, fostering mutual
              growth and success.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
