import React from "react";
import AboutImg from "../../assets/developer_bitmoji.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiCplusplus } from "react-icons/si";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[#0c0e19] text-white py-16 px-6 md:px-20 rounded-lg shadow-lg"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={AboutImg}
            alt="About"
            className="w-full max-w-xl mx-auto rounded-2xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-[#465697] inline-block pb-2">
            About Me
          </h2>
          <p className="text-md md:text-lg leading-relaxed mb-6">
             A passionate software developer with a strong grasp of both front-end and back-end technologies. Completed my B.Tech (2024 batch) in IT, Medi-Caps University. 
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4">Core Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaHtml5 size={40} color="#E44D26" />
              <p className="mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt size={40} color="#1572B6" />
              <p className="mt-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <FaJs size={40} color="#F7DF1E" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={40} color="#38B2AC" />
              <p className="mt-2">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact size={40} color="#61DAFB" />
              <p className="mt-2">React.js</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs size={40} color="#3C873A" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress size={40} color="#FFFFFF" />
              <p className="mt-2">Express.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb size={40} color="#47A248" />
              <p className="mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase size={40} color="#F29111" />
              <p className="mt-2">SQLite</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus size={40} color="#00599C" />
              <p className="mt-2">C++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
