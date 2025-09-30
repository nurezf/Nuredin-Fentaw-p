import Menu from "./Menu/Menu";
import BackgroundVideo from "next-video/background-video";
import Hero from "./Hero/Hero";
import LogoCloud from "./TechStack/TechStack";
import ScrollTriggered from "./Experiance/Experiance";

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
        </BackgroundVideo>
      </div>
    </div>
  );
}
