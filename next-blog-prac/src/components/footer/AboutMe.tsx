import Image from "next/image";
import React from "react";
import Social from "../header/Social";
import BlockUi from "../ui/BlockUi";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <BlockUi name={"AboutMe"}>
      <div className="flex gap-6 mb-5">
        <div className="w-24 h-24 bg-uGray rounded-full"></div>
        <div>
          <p className="text-xl font-bold">Jisoo Woo</p>
          <p className="pb-3">Front-end Developer</p>
          <Social />
        </div>
      </div>
      <p className="font-serif text-sm leading-7 text-ufontColor">
        Hello! My name is Jonathan Doe working from Chile. I create some Ghost
        and Wordpress themes for differents markets, also, i offer live support
        via our ticket system.
      </p>
    </BlockUi>
  );
};

export default AboutMe;
