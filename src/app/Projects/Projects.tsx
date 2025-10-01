import React from "react";
import SectionHeading from "../SectionHeading";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
type Projects = [
  {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
  }
];

const projects: Projects = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "This is a description of project two.",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "This is a description of project three.",

    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://example.com/project-three",
  },
];

const Projects = () => {
  return (
    <div className="w-full px-2 mt-20 sm:px-8" id="projects">
      <SectionHeading
        heading="Projects"
        subheading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, doloribus."
      />
      {/* Example project cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="text-white mb-6 max-w-sm mx-auto backdrop-blur-2xl bg-white/30"
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-t-lg"
              />
            </a>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="mt-6 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                preview
                <FaRegEye
                  style={{
                    color: "black",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
              </Button>
              <Button className="mt-6 flex items-center gap-2 bg-white text-black hover:bg-gray-200">
                code
                <FaGithub />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
