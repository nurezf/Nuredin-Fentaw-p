import Menu from "./Menu/Menu";
import BackgroundVideo from "next-video/background-video";
import Hero from "./Hero/Hero";
import LogoCloud from "./TechStack/TechStack";
import ScrollTriggered from "./Experiance/Experiance";
import Projects from "./Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Fooeter from "./Footer/Fooeter";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full absolute -z-10">
        <BackgroundVideo
          src="https://www.pexels.com/download/video/3141210/"
          className="w-full h-full align-items-start! "
        >
          {" "}
          <Menu className="flex items-start w-full absolute " />
          <Hero />
          <LogoCloud />
          <ScrollTriggered />
          <Projects />
          <Testimonial />
          <Contact />
          <Fooeter />
        </BackgroundVideo>
      </div>
    </div>
  );
}
