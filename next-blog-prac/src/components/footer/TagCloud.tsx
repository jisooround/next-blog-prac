import React from "react";
import BlockUi from "../ui/BlockUi";

type Props = {};

const tagList = [
  { tagName: "JavaScript", color: "uPrimary" },
  { tagName: "TypeScript", color: "uBlue" },
  { tagName: "React", color: "uTwitter" },
  { tagName: "Css", color: "uRed" },
  { tagName: "Project", color: "uYellow" },
  { tagName: "Study", color: "uSkyBlue" },
];

const TagCloud = (props: Props) => {
  return (
    <BlockUi name={"Tag Cloud"}>
      {tagList.map((tag) => (
        <div>
          <span className={`text-${tag.color}`}>#</span> {tag.tagName}
        </div>
      ))}
    </BlockUi>
  );
};

export default TagCloud;
