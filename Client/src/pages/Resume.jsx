import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800">Prashant Dalal</h1>
          <p className="text-lg text-gray-600 mt-2">
            Full-Stack Developer | React Specialist
          </p>
          <a
            href="/PrashantDalal_Resume.pdf"
            download
            className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-500 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I am a passionate developer with expertise in JavaScript, React,
            Node.js, and MongoDB. I love creating visually appealing user
            interfaces and solving challenging problems. When I'm not coding,
            you can find me exploring tech trends, playing Valorant, or
            binge-watching Netflix.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="bg-white p-6 rounded shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-xl text-purple-600">Frontend</h3>
              <p className="text-gray-600 mt-2">
                React, Tailwind CSS, JavaScript, HTML5, CSS3
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-xl text-purple-600">Backend</h3>
              <p className="text-gray-600 mt-2">
                Node.js, Express, REST APIs, MongoDB
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-xl text-purple-600">
                Other Skills
              </h3>
              <p className="text-gray-600 mt-2">
                Version Control (Git), Bcrypt, JWT, PassportJS
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
          <div className="mt-8 space-y-8">
            <motion.div
              className="relative pl-8"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
              <h3 className="text-xl font-bold">Stay-Ez</h3>
              <p className="text-gray-500">May 2024 - July 2024</p>
              <p className="text-gray-600 mt-2">
                Built an Airbnb-style platform for short-term rentals with
                secure authentication, a React frontend, and an Express backend.
              </p>
            </motion.div>
            <motion.div
              className="relative pl-8"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute left-0 top-0 w-6 h-6 bg-purple-600 rounded-full"></div>
              <h3 className="text-xl font-bold">Blogger</h3>
              <p className="text-gray-500">August 2024 - October 2024</p>
              <p className="text-gray-600 mt-2">
                Developed a blogging platform with nested comments, search
                functionality, and secure authentication.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          <div className="mt-8 space-y-4">
            <div>
              <h3 className="font-bold">M.Sc in Physics</h3>
              <p className="text-gray-600">
                Maharishi Dayanand University, 2021
              </p>
            </div>
            <div>
              <h3 className="font-bold">B.Sc in Physics</h3>
              <p className="text-gray-600">Delhi University, 2017</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
