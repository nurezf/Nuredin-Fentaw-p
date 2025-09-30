import Menu from "./Menu/Menu";
import BackgroundVideo from "next-video/background-video";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full absolute -z-10 overflow-hidden">
        <BackgroundVideo
          src="https://www.pexels.com/download/video/3129576/"
          className="w-full h-full flex flex-col justify-center align-items-start"
        >
          {" "}
          <Menu className="flex items-start" />
        </BackgroundVideo>
      </div>
    </div>
  );
}
