import React from "react";
import Skillset from "../components/Skillset";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: "js.svg",
  },
  {
    id: 2,
    name: "React",
    icon: "react.svg",
  },
  {
    id: 3,
    name: "Node",
    icon: "nodejs.svg",
  },
  {
    id: 4,
    name: "Express",
    icon: "express-js.svg",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: "mongodb.svg",
  },
  {
    id: 6,
    name: "Next",
    icon: "nextjs.svg",
  },
  {
    id: 7,
    name: "Redux",
    icon: "redux.svg",
  },
  {
    id: 8,
    name: "Git",
    icon: "git.svg",
  },
];

const tools = [
  {
    id: 1,
    name: "Windows 11",
    icon: "windows.svg",
  },
  {
    id: 2,
    name: "Vite",
    icon: "vite.svg",
  },
  {
    id: 3,
    name: "VS Code",
    icon: "vs-code.svg",
  },
  {
    id: 4,
    name: "NPM",
    icon: "icons8-npm.svg",
  },
  {
    id: 5,
    name: "ChatGPT",
    icon: "chatgpt.svg",
  },
  {
    id: 6,
    name: "Vercel",
    icon: "vercel.svg",
  },
  {
    id: 7,
    name: "Render",
    icon: "render.svg",
  },
];
function About() {
  return (
    <div className="container mx-auto p-8 lg:px-16">
      <h2 className="text-5xl text-center font-semibold my-14">
        Know Who <span className="text-fuchsia-500">I'M</span>
      </h2>
      <div className="flex flex-col gap-4 font-normal text-black leading-7 tracking-wide">
        <p>
          Hello! I'm a passionate developer with a strong foundation in
          <span className="text-fuchsia-500">
            JavaScript, React, Node.js, Express, MongoDB, and Tailwind CSS.
          </span>{" "}
          My journey into tech started with a solid academic background—an{" "}
          <span className="text-fuchsia-500">M.Sc in Physics</span> from
          Maharishi Dayanand University and a B.Sc in Physics from Delhi
          University—which helped sharpen my{" "}
          <span className="text-fuchsia-500">problem-solving skills</span> and
          logical thinking.
        </p>
        <p>
          Currently, I'm diving deep into{" "}
          <span className="text-fuchsia-500">
            Data Structures and Algorithms
          </span>{" "}
          (DSA), exploring <span className="text-fuchsia-500">Next.js</span> for
          server-side rendering,{" "}
          <span className="text-fuchsia-500">learning Python</span> for broader
          versatility, and experimenting with{" "}
          <span className="text-fuchsia-500">Puppeteer</span> to automate tasks.
          What excites me the most about technology is the creative process of{" "}
          <span className="text-fuchsia-500">
            building visually appealing user interfaces
          </span>
          , trying out new ideas, and seeing them come to life as polished
          products.
        </p>
        <p>
          When I'm not coding, I indulge in exploring tech trends I stumble upon
          on YouTube, using ChatGPT to dive deeper into those topics. Outside of
          work, I enjoy playing video games—especially Valorant—and
          binge-watching Netflix shows.
        </p>
        <p>
          I value attention to detail and continuous learning, always striving
          to refine my skills and deliver my best in every project I undertake.
          Let's connect and build something amazing together! 😊
        </p>
      </div>
      <h2 className="text-5xl font-semibold my-8 text-center">
        Professional <span className="text-fuchsia-500">Skillset</span>
      </h2>
      <div className="container mx-auto flex flex-wrap gap-8 justify-center">
        {skills.map((skill) => (
          <div key={skill.id}>
            <Skillset name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-semibold my-8 mt-12 text-center">
        <span className="text-fuchsia-500">Tools</span> I Use
      </h2>
      <div className="container mx-auto flex flex-wrap gap-8 justify-center">
        {tools.map((skill) => (
          <div key={skill.id}>
            <Skillset name={skill.name} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
