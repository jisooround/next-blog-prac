import React from "react";
import { SiVelog } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

type Props = {};

const snsList = [
  { element: <BsGithub /> },
  { element: <SiVelog className="text-uVelog" /> },
  { element: <FiInstagram className="text-uInstagram" /> },
];

const Social = (props: Props) => {
  return (
    <ul className="flex gap-5 align-bottom text-xl items-center">
      {snsList.map((icon, idx) => (
        <li key={idx}>{icon.element}</li>
      ))}
    </ul>
  );
};

export default Social;
