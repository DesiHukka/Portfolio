import React from "react";
import ProjectCard from "../components/ProjectCard";
const projects = [
  {
    id: 1,
    img: "stayez.jpg",
    name: "Stay-Ez",
    description:
      "Stay-Ez is an Airbnb-style online marketplace allowing users to book short-term rentals like houses, apartments, or single rooms worldwide.",
  },
  {
    id: 2,
    img: "blogger.jpg",
    name: "Blogger",
    description:
      "Blogger is a content management system for blogs, providing modern tools for creating and managing high-quality articles.",
  },
];
function Projects() {
  return (
    <div className="p-8">
      <div className="mb-6 p-4">
        <h2 className=" text-4xl font-semibold text-center">
          My Recent <span className="text-fuchsia-600">Works</span>
        </h2>
        <p className="text-center">
          Here are few projects I have worked on recently.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div>
            <ProjectCard
              img={project.img}
              name={project.name}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
