import { FaCompass } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

function ProjectCard({ img, name, description, source, live }) {
  return (
    <div className="flex flex-col gap-4 -mt-8">
      <div
        className="w-96 h-96 md:w-[512px] md:h-[512px] bg-cover bg-center mx-auto"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="max-sm:w-full sm:w-4/6 flex flex-col gap-4 md:gap-8 mx-auto -mt-24">
        <h2 className="text-3xl font-semibold text-center text-fuchsia-600">
          {name}
        </h2>
        <p>{description}</p>
        <a
          href={live}
          target="_blank"
          className="w-max mx-auto group flex px-4 py-2 items-center gap-2 border-2 rounded-full font-medium border-black"
        >
          <FaCompass className="text-3xl group-hover:text-gray-500" />
          <span className="text-xl">Live Demo</span>
        </a>
        <a
          href={source}
          target="_blank"
          className="w-max mx-auto group flex px-4 py-2 items-center gap-2 border-2 rounded-full font-medium border-black"
        >
          <FaCompass className="text-3xl group-hover:text-gray-500" />
          <span className="text-xl">Source Code</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
