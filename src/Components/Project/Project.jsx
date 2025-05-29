import React from "react";
import ProjectCard from "./ProjectCard";
import firstImg from "../../assets/wanderlust.png";
import secondImg from "../../assets/ems.png";
import thirdImg from "../../assets/neurobot-img.png";
import fourthImg from "../../assets/seoroofer.png"

const Project = () => {
  return (
    <div id="Projects" className="p-10 md:px-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <ProjectCard
          title="Wanderlust – Airbnb Clone"
          main="A full-stack travel listing web app with user authentication, CRUD operations, Cloudinary image uploads, and dynamic maps using Mapbox. Built with MongoDB, Express, Node.js, and EJS."
          demoLink="https://wanderlust-demo-link.com"
          codeLink="https://github.com/Snsahu1502/wanderlust"
          bannerImg = {firstImg}
        />
        <ProjectCard
          title="Employee Management System"
          main="A React-based employee management interface featuring CRUD operations, state management, and real-world API integration."
          demoLink="https://employee-system-demo.com"
          codeLink="https://github.com/Snsahu1502/employee-management"
          bannerImg = {secondImg}
        />
        <ProjectCard
          title="Neuro-Bot UI Chatbot"
          main="Responsive frontend UI for an AI chatbot using React.js and Tailwind CSS. Clean and modern interface designed for interactive communication."
          demoLink="https://neuro-bot-ui-cl.onrender.com"
          codeLink="https://github.com/Snsahu1502/neuro-bot-ui-cl"
          bannerImg = {thirdImg}
        />
        <ProjectCard
          title="SEO Roofer Web App"
          main="SEO-optimized, static responsive website for a roofing service business built with HTML, CSS, and JavaScript to ensure fast performance and discoverability."
          demoLink="https://seoroofer.onrender.com"
          codeLink="https://github.com/Snsahu1502/seoroofer"
          bannerImg = {fourthImg}
        />
      </div>
    </div>
  );
};

export default Project;
