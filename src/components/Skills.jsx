import React from "react";
import jsLogo from "../assets/js_logo.png";
import ViteLogo from "../assets/vite_logo.png";
import BootstrapLogo from "../assets/bootstrap_logo.png";
import cssLogo from "../assets/css_logo.png";
import GitHubLogo from "../assets/github-logo.png";
import HtmlLogo from "../assets/html_logo.png";
import ReactLogo from "../assets/React_logo.png";
import TailwindLogo from "../assets/tailwind_logo.png";
import NextjsLogo from "../assets/nextjs.svg";
function Skills() {
  const skills = [
    {
      id: 1,
      src: HtmlLogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssLogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsLogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactLogo,
      title: "REACT",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: TailwindLogo,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: GitHubLogo,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 7,
      src: BootstrapLogo,
      title: "BootStrap",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: ViteLogo,
      title: "VITE",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: NextjsLogo,
      title: "NextJs",
      style: "shadow-white",
    },
  ];

  return (
    <div
      id="Skills"
      className="bg-gradient-to-br from-gray-600 to-black w-full m-auto md:pl-20 p-4 py-16 text-white"
    >
      <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-white mb-6">
          Skills
        </h1>
        <p className="flex sm:text-2xl md:text-sm  p-4 tracking-wide text-justify">
          These are the technology i have worked with.
        </p>
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 gap-8 lg:gap-16 text-center py-8 px-12 sm:px-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 border-gray-6 text-white
                         duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 h-[60%] mx-auto" alt="Html_logo" />
              <p className="mt-8"> {title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
