import React from "react";
import Articles from "./footer/Articles";
import FollowMe from "./footer/FollowMe";
import TagCloud from "./footer/TagCloud";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="bg-uWhite w-1/3">
      <Articles />
      <TagCloud />
      <FollowMe />
    </div>
  );
};

export default SideBar;
