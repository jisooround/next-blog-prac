import React from "react";
import BlockUi from "../ui/BlockUi";

type Props = {};

const tagList = [
  { tagName: "JavaScript", color: "uPrimary" },
  { tagName: "TypeScript", color: "uBlue" },
  { tagName: "React", color: "uTwitter" },
  { tagName: "CSS", color: "uRed" },
  { tagName: "Project", color: "uYellow" },
  { tagName: "Study", color: "uSkyBlue" },
];

const TagCloud = (props: Props) => {
  return (
    <BlockUi name={"Tag Cloud"}>
      <div className="flex flex-wrap gap-3">
        {tagList.map((tag, idx) => (
          <div
            key={idx}
            className="bg-uWhite text-uFontColor flex p-1 text-sm shadow-md cursor-pointer"
          >
            <button className={`text-${tag.color}`}>#</button> {tag.tagName}
          </div>
        ))}
      </div>
    </BlockUi>
  );
};

export default TagCloud;
