import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiSqlite } from "react-icons/si";
import { IoBriefcaseOutline } from "react-icons/io5";
import Assist4youImg from "../../assets/assist4you.png"; // ✅ Replace with your actual image file name

const Experience = () => {
  return (
    <div id="Experience" className="p-4 md:p-24 md:py-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-center">
        {/* Skills Section */}
        <div className="flex flex-wrap items-center justify-center md:w-2/5 gap-8 md:px-12 py-12">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSqlite color="#003B57" size={50} />
          </span>
        </div>

        {/* Experience Card */}
        <div>
          <div className="flex-col p-6 text-left md:p-7 gap-6 bg-slate-950 bg-opacity-45 md:mt-4 rounded-2xl items-start">
            <a href="https://assist4you.netlify.app/">
              <img
                src={Assist4youImg}
                alt="Assist4you Logo"
                className="w-full mx-auto max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain rounded-lg"
              />
            </a>
            <div className="text-white mt-4">
              <h2 className="leading-tight font-semibold text-lg hover:underline">
                <a href="https://assist4you.netlify.app/">Web Developer Intern, Assist4you</a>
              </h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2024 – Oct 2024
              </p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Developed and deployed a web platform for remote staffing and recruitment services.</li>
                <li>Used HTML, CSS, JavaScript, and Node.js to build frontend and backend functionalities.</li>
                <li>Implemented efficient data handling and storage using SQLite3.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
