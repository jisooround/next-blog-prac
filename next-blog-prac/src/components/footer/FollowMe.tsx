import React from "react";
import BlockUi from "../ui/BlockUi";
import IconUi from "../ui/IconUi";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

type Props = {};

const socialList = [
  {
    name: "github",
    icon: <AiFillGithub />,
    bg: "bg-uBlack",
    color: "uBlack",
    href: "",
  },
  {
    name: "velog",
    icon: <SiVelog />,
    bg: "bg-uVelog",
    color: "uVelog",
    href: "",
  },
  {
    name: "instagram",
    icon: <FiInstagram />,
    bg: "bg-uInstagram",
    color: "uInstagram",
    href: "",
  },
];

const FollowMe = (props: Props) => {
  return (
    <BlockUi name={"FollowMe!"}>
      <div className="flex w-full">
        {socialList.map((item) => (
          <div
            className={`flex justify-center items-center w-20 h-20 ${item.bg} mr-3`}
          >
            <p className="text-uWhite text-xl">{item.icon}</p>
          </div>
        ))}
      </div>
    </BlockUi>
  );
};

export default FollowMe;
