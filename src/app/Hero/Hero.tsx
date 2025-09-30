import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { MdOutlineStart } from "react-icons/md";

const Hero = () => {
  return (
    <div className="m-40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-white max-w-xl text-center">
        I'm a developer specializing in building (and occasionally designing)
        exceptional digital experiences. Explore my projects and skills below.
      </p>
      <div className="mt-6 flex space-x-4">
        <Button className="mt-6 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
          get started
          <MdOutlineStart />
        </Button>
        <Button className="mt-6 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
          code
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
