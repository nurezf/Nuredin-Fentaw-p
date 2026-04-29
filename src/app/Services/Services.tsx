import React from "react";
import SectionHeading from "../SectionHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  pricing?: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Build responsive, modern websites and web applications using the latest technologies.",

    features: [
      "Custom Design",
      "Responsive Layout",
      "SEO Optimization",
      "Performance Tuning",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and visually appealing user interfaces and experiences.",

    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    title: "Mobile App Development",
    description:
      "Develop cross-platform mobile applications for iOS and Android.",

    features: [
      "Native Performance",
      "Cross-Platform",
      "App Store Deployment",
      "Maintenance",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full px-4 mt-24 sm:px-10" id="services">
      <SectionHeading
        heading="Services"
        subheading="Explore the services I offer to help bring your ideas to life."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="
              group relative w-full h-full text-white
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-lg
              transition-all duration-300 ease-in-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-white/40
              overflow-hidden
            "
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-20"></div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <ul className="space-y-2 text-sm text-gray-300">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Link href="#contact" className="w-full">
                <Button
                  className="
                    w-full
                    bg-white/20
                    text-white
                    border border-white/30
                    backdrop-blur-md
                    hover:bg-white hover:text-black
                    transition-all duration-300
                  "
                >
                  Get in Touch
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
