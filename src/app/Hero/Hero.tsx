import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="my-8 sm:my-16 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-base sm:text-lg text-white max-w-xl text-center">
        I'm a developer specializing in building (and occasionally designing)
        exceptional digital experiences. Explore my projects and skills below.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto items-center justify-center">
        <Button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
          LinkedIn
          <CiLinkedin
            style={{ color: "blue", fontSize: "30px", cursor: "pointer" }}
          />
        </Button>
        <Button className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
          code
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
