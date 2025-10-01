import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Fooeter = () => {
  return (
    <div className="footer">
      <div className="flex justify-center space-x-4 p-4">
        <Link
          href="https://github.com/nurezf"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub
            style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
            className=""
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nuredin-fentaw-04b560365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          />
        </Link>
        <Link href="https://t.me/nurezf" target="_blank" aria-label="LinkedIn">
          <FaTelegram
            style={{ color: "blue", fontSize: "30px", cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="text-center p-4 text-white">
        © 2024 Copyright: Nuredin Fentaw
      </div>
    </div>
  );
};

export default Fooeter;
