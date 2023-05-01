import React from "react";
import AboutMe from "./AboutMe";
import Articles from "./Articles";
import FollowMe from "./FollowMe";
import TagCloud from "./TagCloud";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-uBgColor flex px-12">
      <Articles />
      <TagCloud />
      <FollowMe />
      <AboutMe />
    </div>
  );
};

export default Footer;
