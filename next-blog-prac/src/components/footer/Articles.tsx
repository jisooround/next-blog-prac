import Image from "next/image";
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
          <div className="w-16 h-17 bg-uGray box-border mr-5"></div>
          <div>
            <h4 className="text-uFontColor font-semibold mb-3">{item.title}</h4>
            <p className="font-serif text-sm text-uFontColor font-semibold">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </BlockUi>
  );
};

export default Articles;
