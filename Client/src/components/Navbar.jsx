import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPassport } from "react-icons/fa6";
import { BiSolidNotepad } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="sticky top-0 z-50 bg-gray-900 w-full p-4 px-8">
        <div className="container mx-auto h-24 flex justify-between md:justify-evenly items-center">
          <Link
            to={"/"}
            className="relative group flex gap-2 items-center hover:text-white text-gray-400 font-bold max-sm:text-lg text-2xl lg:text-3xl"
          >
            <FaHome className="max-sm:hidden" />
            <span>Home</span>
            <span className="w-0 h-1 absolute top-full left-0 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to={"/about"}
            className="relative group flex gap-2 items-center hover:text-white text-gray-400 font-bold max-sm:text-lg text-2xl lg:text-3xl"
          >
            <IoPerson className="max-sm:hidden" />
            <span>About Me</span>
            <span className="w-0 h-1 absolute top-full left-0 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to={"/projects"}
            className="relative group flex gap-2 items-center hover:text-white text-gray-400 font-bold max-sm:text-lg text-2xl lg:text-3xl"
          >
            <FaPassport className="max-sm:hidden" />
            <span>Projects</span>
            <span className="w-0 h-1 absolute top-full left-0 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link className="relative group flex gap-2 items-center hover:text-white text-gray-400 font-bold max-sm:text-lg text-2xl lg:text-3xl">
            <BiSolidNotepad className="max-sm:hidden" />
            <span>Resume</span>
            <span className="w-0 h-1 absolute top-full left-0 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
