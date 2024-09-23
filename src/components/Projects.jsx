import React from "react";
import ProjectItem from "./ProjectItem";
import RMcopyImg from "../assets/Rm-copy.png";
import IpaddImg from "../assets/ipaddress-tracker.png";
import TvseriesImg from "../assets/tv-series.png";
import SneakersImg from "../assets/sneakers.png";
import MoviesImg from "../assets/movie-retainer.png";
import SpaceImg from "../assets/space.png";
import EasybankImg from "../assets/easybank.png";
import QuizappImg from "../assets/Quiz app.png";
import HoobankImg from "../assets/hobobank.png";
import TravelappImg from "../assets/travelapp.png";
import CryptovilleImg from "../assets/crypoville.png";
import EcommerceImg from "../assets/ecommerce.png";

function Projects() {
  const projectLinkIpAddressTracker =
    "https://fantastizeey1.github.io/IP-Address-Tracker/";
  const sourceCodeLinkIpAddressTracker =
    "https://github.com/fantastizeey1/IP-Address-Tracker";
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001be]">Projects</h1>
      <p className="text-center py-8">
        Welcome to a showcase of my passion and dedication. These projects
        reflect my journey, where each line of code tells a story. From ideation
        to execution, these creations embody the essence of my skills and
        commitment. Dive into the world of my work, and explore the intersection
        of creativity and technology.
      </p>
      <div className="grid sm:grid-cols-2 gap-16">
        <ProjectItem
          img={IpaddImg}
          title="Ip Address tracker App"
          projectLink={projectLinkIpAddressTracker}
          sourceCodeLink={sourceCodeLinkIpAddressTracker}
        />
        <ProjectItem
          img={CryptovilleImg}
          title="Cryptoville - A crypto News Forum"
          projectLink="https://cryptoville.vercel.app/"
          sourceCodeLink="https://github.com/fantastizeey1/cryptoville"
        />
        <ProjectItem
          img={EcommerceImg}
          title="A simple E-commerce platform"
          projectLink="https://shopizeey.vercel.app/"
          sourceCodeLink="https://github.com/fantastizeey1/ecommerce"
        />
        <ProjectItem
          img={TvseriesImg}
          title="tv-Series tracker App"
          projectLink="https://fantastizeey1.github.io/tvseries/"
          sourceCodeLink="https://github.com/fantastizeey1/tvseries"
        />
        <ProjectItem
          img={RMcopyImg}
          title="richard Mille Col App"
          projectLink="https://fantastizeey1.github.io/RM-Collections/"
          sourceCodeLink="https://github.com/fantastizeey1/RM-Collections"
        />
        <ProjectItem
          img={SneakersImg}
          title="Fall Sneakers  App"
          projectLink="https://fantastizeey1.github.io/E-commerce-product-page/"
          sourceCodeLink="https://github.com/fantastizeey1/E-commerce-product-page"
        />
        <ProjectItem
          img={MoviesImg}
          title="Movies retainer App"
          projectLink="https://fantastizeey1.github.io/FANTASTIZEEY-FILMMAKER/"
          sourceCodeLink="https://github.com/fantastizeey1/FANTASTIZEEY-FILMMAKER"
        />
        <ProjectItem
          img={SpaceImg}
          title="space-tour page App"
          projectLink="https://spacetour-zeey.vercel.app/"
          sourceCodeLink="https://github.com/fantastizeey1/spacetour"
        />
        <ProjectItem
          img={QuizappImg}
          title="Flashcard Quiz App"
          projectLink="https://flashcard-quiz-lake.vercel.app/"
          sourceCodeLink="https://github.com/fantastizeey1/flashcard-quiz"
        />
        <ProjectItem
          img={EasybankImg}
          title="Easybank landing Page"
          projectLink="https://eazibanks.netlify.app/"
          sourceCodeLink="https://github.com/fantastizeey1/EazyBank"
        />
        <ProjectItem
          img={HoobankImg}
          title="HooBank landing Page"
          projectLink="https://hobobank.netlify.app/"
          sourceCodeLink="https://github.com/fantastizeey1/Hoobank"
        />
        <ProjectItem
          img={TravelappImg}
          title="Hilink landing Page"
          projectLink="https://travelapphome.netlify.app/"
          sourceCodeLink="https://github.com/fantastizeey1/TravelApp"
        />
      </div>
    </div>
  );
}

export default Projects;
