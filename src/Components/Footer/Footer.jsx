import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12  items-start md:items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contacts</h1>
        <h3 className="text-2xl md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex items-center gap-0">
          <a
            href="tel:8085264961"
            className="inline-block mt-10 text-white  text-sm md:text-lg hover:opacity-85 duration-300 rounded-3xl bg-[#465697]"
          >
            <span className="flex items-center gap-2 hover:underline hover:scale-105">
              <IoCallSharp />
              Contact Me
            </span>
          </a>
        </li>
        <li className="flex items-center gap-0">
          <a
            href="mailto:sahushiva1502@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105"
          >
            <MdOutlineEmail size={20} />
            sahushiva1502@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/shivnarayan-sahu-46845219a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105"
          >
            <CiLinkedin />
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://github.com/Snsahu1502"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105"
          >
            <FaGithub />
            GitHub
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://leetcode.com/u/Shivansh_1502"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105"
          >
            <SiLeetcode />
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
