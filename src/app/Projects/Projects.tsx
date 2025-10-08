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
type Project = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    title: "GameHub",
    description:
      "Game Hub is a sleek web app built with React and TypeScript, enabling users to explore, search, and filter video games. It offers a responsive UI, dynamic game listings, genre/platform filtering, sorting options, and critic scores. Powered by Vite for rapid development, it uses custom hooks for efficient data fetching and a modular component struct",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://github.com/nurezf/game-hub",
  },
  {
    title: "Gebeta food recipe Mobile App",
    description: "gebeta mobile app by flutter + express.js",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://github.com/nurezf/Gebeta",
  },
  {
    title: "Inventory Managment",
    description:
      "This is a modern inventory management web app built with Next.js, TypeScript, and Zustand for state management. It features a responsive UI, product CRUD operations, and dynamic tables. The project uses shadcn/ui for beautiful, accessible React components, ensuring a seamless user experience and rapid development",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    projectUrl: "https://github.com/nurezf/inventory-1",
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
