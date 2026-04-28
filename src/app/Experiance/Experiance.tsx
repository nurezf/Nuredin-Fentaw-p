import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import SectionHeading from "../SectionHeading";

export default function Experience() {
  return (
    <section
      id="experiance"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-20"
    >
      <SectionHeading
        heading="Experience"
        subheading="A summary of my most meaningful roles, internships, and freelance work so far."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.title}
            index={index}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}

interface ExperienceProps {
  emoji: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  hueA: number;
  hueB: number;
  index: number;
}

function ExperienceCard({
  emoji,
  title,
  subtitle,
  period,
  description,
  hueA,
  hueB,
  index,
}: ExperienceProps) {
  const gradient = `linear-gradient(135deg, hsl(${hueA}, 90%, 55%), hsl(${hueB}, 90%, 60%))`;

  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.45 }}
      variants={cardVariants}
      className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-6 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-8"
    >
      <div
        className="absolute -left-4 top-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full opacity-30 blur-3xl sm:-left-8 sm:top-8"
        style={{ background: gradient }}
      />
      <div className="relative flex items-start gap-3 sm:gap-5">
        <div className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-2xl sm:rounded-3xl bg-slate-950/60 text-2xl sm:text-3xl shadow-inner shadow-black/20">
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sky-300/90">
            {subtitle}
          </p>
          <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-slate-950/50 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-200 ring-1 ring-white/10">
        <span className="font-medium text-sky-200">{period}</span>
        <span className="rounded-full bg-white/10 px-2 py-1 sm:px-3 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-200">
          Role overview
        </span>
      </div>
    </motion.article>
  );
}

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6,
    },
  },
};

const experiences = [
  {
    emoji: "🎓",
    title: "Wollo University",
    subtitle: "Software Engineering Student",
    period: "2022 — present",
    description:
      "Studying software engineering with a strong focus on web development, system architecture, and collaborative product delivery.",
    hueA: 200,
    hueB: 210,
  },
  {
    emoji: "💼",
    title: "AppFactory Internship",
    subtitle: "Full Stack Developer Intern",
    period: "2025",
    description:
      "Supported web application development across React and backend services, while contributing to testing, documentation, and deployment workflows.",
    hueA: 190,
    hueB: 210,
  },
  {
    emoji: "🌐",
    title: "Freelancing",
    subtitle: "Web Developer",
    period: "2024 — present",
    description:
      "Built modern websites and apps for small businesses using responsive design, clean interfaces, and performance-first practices.",
    hueA: 180,
    hueB: 200,
  },
  {
    emoji: "🤝",
    title: "MKF's ICT Solution Internship",
    subtitle: "Next.js & node.js Full Stack",
    period: "2022 — present",
    description:
      "Delivered full-stack features using Next.js and Node.js, from UI components to API integration and deployment automation.",
    hueA: 210,
    hueB: 230,
  },
];
