import React from "react";
import BlockUi from "../ui/BlockUi";

type Props = {};

const articlesList = [
  {
    thumbnailURL: "art.jpg",
    title: "Far far away, behind the word mountains",
    date: "2023.5.1",
  },
  {
    thumbnailURL: "cat.jpg",
    title: "The spectacle before us was indeed sublime",
    date: "2023.5.2",
  },
  {
    thumbnailURL: "dessert.jpg",
    title: "Musical improvisation is the spontaneous music",
    date: "2023.5.3",
  },
];

const Articles = (props: Props) => {
  return (
    <BlockUi name={"Articles"}>
      {articlesList.map((item, idx) => (
        <div key={idx} className="flex mb-5 w-full justify-between">
          <img
            src={item.thumbnailURL}
            alt={item.title}
            className="w-1/6 min-w-1/6 h-16 object-cover mr-5"
          />
          <div>
            <h4 className="text-uFontColor font-semibold">{item.title}</h4>
          </div>
        </div>
      ))}
    </BlockUi>
  );
};

export default Articles;
