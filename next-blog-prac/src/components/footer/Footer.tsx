import React from "react";
import Social from "../header/Social";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import TagCloud from "./TagCloud";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="uBgColor">
      <Articles />
      <TagCloud />
      <Social />
      <AboutMe />
    </div>
  );
};

export default Footer;
