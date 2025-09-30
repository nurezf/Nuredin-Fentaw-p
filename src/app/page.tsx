import Menu from "./Menu/Menu";
import BackgroundVideo from "next-video/background-video";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full absolute -z-10 overflow-hidden">
        <BackgroundVideo
          src="https://www.pexels.com/download/video/3141210/"
          className="w-full h-full align-items-start! "
        >
          {" "}
          <Menu className="flex items-start w-full absolute " />
          <Hero />
        </BackgroundVideo>
      </div>
    </div>
  );
}
