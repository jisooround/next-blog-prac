import React from "react";
import BlockUi from "../ui/BlockUi";

type Props = {};

const tagList = [
  { tagName: "JavaScript", textColor: "text-uPrimary" },
  { tagName: "TypeScript", textColor: "text-uBlue" },
  { tagName: "React", textColor: "text-uTwitter" },
  { tagName: "CSS", textColor: "text-uRed" },
  { tagName: "Project", textColor: "text-uYellow" },
  { tagName: "Study", textColor: "text-uSkyBlue" },
];

const TagCloud = (props: Props) => {
  return (
    <BlockUi name={"Tag Cloud"}>
      <div className="flex flex-wrap gap-3">
        {tagList.map((tag, idx) => (
          <div
            key={idx}
            className={`bg-uWhite text-uFontColor flex p-1 text-sm shadow-md cursor-pointer`}
          >
            <button className={`${tag.textColor}`}>#</button> {tag.tagName}
          </div>
        ))}
      </div>
    </BlockUi>
  );
};

export default TagCloud;
