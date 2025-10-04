import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import SectionHeading from "../SectionHeading";

export default function Experience() {
  return (
    <div
      className="w-full mb-20 max-w-2xl mx-auto px-2 sm:px-0 grid grid-cols-1  gap-6"
      id="experiance"
    >
      <div className="col-span-full">
        <SectionHeading
          heading="Experiance"
          subheading="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, doloribus."
        />
      </div>
      {experiences.map((exp, i) => (
        <Card key={i} i={i} {...exp} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  title: string;
  subtitle: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, title, subtitle, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, #2e7d4380, #5cb57480)`; // 80 = 50% opacity
  return (
    <motion.div
      className={`card-container-${i} w-full max-w-xs mx-auto`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 64 }}>{emoji}</span>
          <h2
            style={{
              fontSize: 24,
              margin: "16px 0 4px 0",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: 16, opacity: 0.8, textAlign: "center" }}>
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr, 1fr",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const experiences = [
  {
    emoji: "🎓",
    title: "Wollo University",
    subtitle: "Software Engineering Student (2022–present)",
    hueA: 200,
    hueB: 210,
  },
  {
    emoji: "💼",
    title: "Internship at AppFactory",
    subtitle: "Full Stack Developer Intern (2025)",
    hueA: 190,
    hueB: 210,
  },
  {
    emoji: "🌐",
    title: "Freelancing",
    subtitle: "Web Developer (2024–present)",
    hueA: 180,
    hueB: 200,
  },
  {
    emoji: "🤝",
    title: "Internship at qimem technology",
    subtitle: "Next.js and Laravel Full-Stack developer (2022–present)",
    hueA: 210,
    hueB: 230,
  },
];
