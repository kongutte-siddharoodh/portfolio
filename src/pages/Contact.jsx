import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="contact-container mx-20 font-semibold flex items-center justify-center border-2 border-[#0099FF] rounded-md p-4 h-60">
        <div className=" flex flex-col gap-6">
          <div className="text-2xl font-bold flex items-center justify-center">
            <span> Contact</span>
          </div>
          <div className="contact-details ">
            <div className="flex items-center gap-3">
              <span className=" w-20">Email:-</span>
              <div>siddharoodhkongutte@gmail.com</div>
            </div>
            <div className="flex items-center gap-3">
              <span className=" w-20">Mobile:-</span>
              <div>8310122871</div>
            </div>
            <div className="flex items-center gap-3">
              <span className=" w-20">LinkedIn:-</span>
              <Link
                to="https://www.linkedin.com/in/kongutte-siddharoodh-a820232a7/"
                target="_blank">
                www.linkedin.com/in/kongutte-siddharoodh-a820232a7
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
