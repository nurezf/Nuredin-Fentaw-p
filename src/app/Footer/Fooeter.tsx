import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa";

const Fooeter = () => {
  return (
    <div className="footer">
      <div className="flex justify-center space-x-4 p-4">
        <a href="#" aria-label="GitHub">
          <FaGithub
            style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
          />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin
            style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
          />
        </a>
        <a href="#" aria-label="Telegram">
          <FaTelegram
            style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
          />
        </a>
      </div>

      <div className="text-center p-4 text-white">
        © 2024 Copyright: Nuredin Fentaw
      </div>
    </div>
  );
};

export default Fooeter;
