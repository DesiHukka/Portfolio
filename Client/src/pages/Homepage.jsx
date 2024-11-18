import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

function Homepage() {
  return (
    <div className="relative w-full h-screen flex flex-col p-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-center items-center lg:mr-20 xl:mx-36">
        <div className="my-8 flex-1">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="bottom"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="w-1/2 md:w-full lg:w-5/6 xl:w-4/6 mx-auto aspect-square overflow-hidden rounded-full"
          >
            <img src="profile.jpg" className="object-cover" />
          </Tilt>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
          <div>
            <span className=" text-black font-bold text-3xl">Hi There!</span>
            <span className="inline-block text-3xl animate-wave origin-bottom-right">
              👋
            </span>
          </div>
          <h2 className="text-4xl font-semibold text-black">
            I'M <span className="text-fuchsia-600">Prashant Dalal</span>
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="coffee.svg" className="w-12" />
              <span>Fueled by Coffee</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="location.svg" className="w-12" />
              <span>Based in Delhi NCR</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="developer.svg" className="w-12" />
              <span>Full Stack MERN Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="email.svg" className="w-12" />
              <span>prashant007.dalal@gmail.com</span>
            </div>
          </div>
          <div className="text-center text-2xl font-medium text-black mt-10">
            <ReactTypingEffect
              text={[
                "Hello, I'm a Developer.",
                "I build amazing projects.",
                "Welcome to my portfolio!",
              ]}
              className="capitalize text-fuchsia-700"
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={100}
              cursor="|"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex-1 text-black font-semibold p-8">
        <h2 className="text-4xl mb-8 ">
          LET ME <span className="text-fuchsia-600">INTRODUCE</span> MYSELF
        </h2>
        <div className="flex flex-col gap-4 text-xl font-light">
          <p>
            Hi there! I'm Prashant Dalal, a full-stack developer working with
            modern technologies like JavaScript, React, Tailwind CSS, Node, and
            Express. I thrive on crafting interactive, user-centric web
            experiences and enjoy diving into new tech trends.
          </p>
          <p>
            When I’m not coding, you’ll find me playing Valorant or
            experimenting with new web technologies I’ve come across, often with
            the <span className="text-fuchsia-600">help of ChatGPT</span> to
            bring my ideas to life. Currently, I’m sharpening my{" "}
            <span className="text-fuchsia-600">skills in DSA</span> and
            exploring the{" "}
            <span className="text-fuchsia-600">depths of Next.js.</span>
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <span>Node.js</span> and{" "}
            <span>Modern Javascript Library and Frameworks</span> like
            <span className="text-fuchsia-600"> React.js and Next.js</span>
          </p>
          <p>
            What I cherish the most is spending quality time with my mom—it’s
            the ultimate way to recharge and find inspiration. Let’s create
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
