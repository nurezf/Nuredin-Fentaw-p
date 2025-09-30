import Image from "next/image";

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

export const logos = [
  { src: ReactLogo, alt: "React Logo", name: "React", width: 30, height: 30 },
  {
    src: NextjsLogo,
    alt: "Next.js Logo",
    name: "Next.js",
    width: 70,
    height: 70,
  },
  {
    src: TypescriptLogo,
    alt: "TypeScript Logo",
    name: "TypeScript",
    width: 70,
    height: 70,
  },
  {
    src: TailwindCSSLogo,
    alt: "Tailwind CSS Logo",
    name: "Tailwind CSS",
    width: 70,
    height: 70,
  },
  {
    src: PythonLogo,
    alt: "Python Logo",
    name: "Python",
    width: 70,
    height: 70,
  },
  {
    src: VercelLogo,
    alt: "Vercel Logo",
    name: "Vercel",
    width: 70,
    height: 70,
  },
  {
    src: ExpressLogo,
    alt: "Express Logo",
    name: "Express",
    width: 70,
    height: 70,
  },
  {
    src: PrismaLogo,
    alt: "Prisma Logo",
    name: "Prisma",
    width: 70,
    height: 70,
  },
  { src: JavaLogo, alt: "Java Logo", name: "Java", width: 70, height: 70 },
  {
    src: LaravelLogo,
    alt: "Laravel Logo",
    name: "Laravel",
    width: 70,
    height: 70,
  },
  { src: CPlusPlusLogo, alt: "C++ Logo", name: "C++", width: 70, height: 70 },
  {
    src: JavascriptLogo,
    alt: "JavaScript Logo",
    name: "JavaScript",
    width: 70,
    height: 70,
  },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <Image
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-150 invert [&>path]:fill-white"
          />
        </div>
        <Image
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <Image
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      ))
    ).flat()}
  </div>
);

export default function LogoCloud() {
  return (
    <div className="lg:mt-22 relative z-40 mx-auto mb-[-75px] mt-[50px] flex flex-col gap-3 backdrop-blur-md  rounded-2xl py-5 text-white lg:mb-0 lg:max-w-[1080px] lg:gap-6">
      <h1 className="mx-auto mb-3 w-full px-8 text-center text-sm lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Tech Stacks
      </h1>

      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: "-20s" }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      <p className="mx-auto w-full max-w-[250px] text-center text-sm opacity-60 lg:max-w-none">
        Leveraging state-of-the-art technologies
      </p>
    </div>
  );
}
