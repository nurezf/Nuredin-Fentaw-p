"use client";

import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { motion } from "motion/react";

const PythonLogo = "/svg/python.svg";
const TailwindCSSLogo = "/svg/tailwindcss.svg";
const ReactLogo = "/svg/react.svg";
const TypescriptLogo = "/svg/typescript.svg";
const VercelLogo = "/svg/vercel.svg";
const ExpressLogo = "/svg/express.svg";
const PrismaLogo = "/svg/prisma-wordmark.svg";
const NextjsLogo = "/svg/nextjs-wordmark.svg";
const JavaLogo = "/svg/java.svg";
const LaravelLogo = "/svg/laravel-wordmark.svg";
const CPlusPlusLogo = "/svg/c-plusplus.svg";
const JavascriptLogo = "/svg/javascript.svg";

interface TechItem {
  src: string;
  alt: string;
  name: string;
  category: string;
  width: number;
  height: number;
}

const techStack: TechItem[] = [
  { src: ReactLogo, alt: "React Logo", name: "React", category: "Frontend", width: 50, height: 50 },
  { src: NextjsLogo, alt: "Next.js Logo", name: "Next.js", category: "Frontend", width: 80, height: 80 },
  { src: TypescriptLogo, alt: "TypeScript Logo", name: "TypeScript", category: "Language", width: 50, height: 50 },
  { src: JavascriptLogo, alt: "JavaScript Logo", name: "JavaScript", category: "Language", width: 50, height: 50 },
  { src: TailwindCSSLogo, alt: "Tailwind CSS Logo", name: "Tailwind CSS", category: "Styling", width: 50, height: 50 },
  { src: PythonLogo, alt: "Python Logo", name: "Python", category: "Language", width: 50, height: 50 },
  { src: JavaLogo, alt: "Java Logo", name: "Java", category: "Language", width: 50, height: 50 },
  { src: CPlusPlusLogo, alt: "C++ Logo", name: "C++", category: "Language", width: 50, height: 50 },
  { src: ExpressLogo, alt: "Express Logo", name: "Express.js", category: "Backend", width: 60, height: 60 },
  { src: LaravelLogo, alt: "Laravel Logo", name: "Laravel", category: "Backend", width: 60, height: 60 },
  { src: PrismaLogo, alt: "Prisma Logo", name: "Prisma", category: "Database", width: 60, height: 60 },
  { src: VercelLogo, alt: "Vercel Logo", name: "Vercel", category: "Deployment", width: 50, height: 50 },
];

const categories = ["Frontend", "Backend", "Language", "Styling", "Database", "Deployment"];

const getCategoryColor = (category: string) => {
  const colors = {
    Frontend: "from-blue-500 to-cyan-500",
    Backend: "from-green-500 to-emerald-500",
    Language: "from-purple-500 to-pink-500",
    Styling: "from-orange-500 to-red-500",
    Database: "from-indigo-500 to-blue-500",
    Deployment: "from-gray-500 to-slate-500",
  };
  return colors[category as keyof typeof colors] || "from-gray-500 to-slate-500";
};

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

        <div className="relative flex flex-col items-center text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
            <Image
              src={tech.src}
              alt={tech.alt}
              width={tech.width}
              height={tech.height}
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
              {tech.name}
            </h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(tech.category)} text-white`}>
              {tech.category}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading
        heading="Tech Stack"
        subheading="Technologies and tools I use to bring ideas to life"
      />

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {techStack.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex -space-x-2">
            {categories.slice(0, 4).map((category, index) => (
              <div
                key={category}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
                style={{ marginLeft: index > 0 ? '2px' : '0' }}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">
            Always learning, always growing
          </span>
        </div>
      </motion.div>
    </section>
  );
}
