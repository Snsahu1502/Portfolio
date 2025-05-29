import React from "react";
import avatarImg from "../../assets/shiva img (2).png";
import TextChange from "../textchanger";
import { IoCallSharp } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5"; // Icon for download

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 p-10 md:p-20">
      {/* Text Section */}
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h1 className="text-3xl md:text-7xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          A passionate Software Developer with hands-on experience in front-end
          and back-end technologies. I enjoy building interactive and
          user-friendly applications while continuously learning and improving
          my skills. Excited about the opportunity to contribute to real-world
          projects and grow as a developer.
        </p>

        {/* Contact Button */}
        <a
          href="tel:8085264961"
          className="inline-block mt-10 text-white py-2 px-5 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          <span className="flex items-center">
            <IoCallSharp />
            &nbsp;Contact Me
          </span>
        </a>
        &nbsp;&nbsp;
        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/179wvKW4X0P-OyuAGAOCRx1zH7rqqKLlk/view?usp=drive_link" // ✅ Update this path based on where your resume file is
          download
          className="inline-block mt-4 text-white py-2 px-5 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          <span className="flex items-center">
            <IoDownloadOutline />
            &nbsp;Download Resume
          </span>
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={avatarImg}
          alt="Shivnarayan Sahu"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
