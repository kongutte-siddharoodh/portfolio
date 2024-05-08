import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/images/img-sid.png";

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="home-left-container px-20 font-semibold flex items-center justify-between w-full">
        <div className="intro w-1/2">
          <div className="hello-msg text-2xl">Hi, I'm</div>
          <div className="name text-4xl font-bold">Kongutte Siddharoodh</div>
          <div className="role text-xl mt-2">Frontend Web Developer</div>
          <div className="role-desc mt-4 font-normal">
            Bringing websites to life. Building interactive experiences that
            engage. Passionate front-end developer at your service.
          </div>
          <div className="buttons flex items-center gap-5 mt-4">
            <button className="resume-btn p-2 px-4 rounded-md border-2">
              Resume
            </button>
            <button className="letstalk-btn p-2 px-4 rounded-md border-2">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="img w-1/2 flex items-center justify-end">
          <img
            src={Image}
            className="rounded-[50%] border-2 border-white w-80 h-80"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
