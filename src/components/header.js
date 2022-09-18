import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <h1>Note Taker</h1>
      <div className="icons">
        <a
          className="github"
          href="https://github.com/paynekerz/New-Note-Taker"
          target="_blank"
        >
          <AiFillGithub size={33} />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/paynekerz/"
          target="_blank"
        >
          <AiOutlineLinkedin size={33} />
        </a>
      </div>
    </div>
  );
};

export default Header;
