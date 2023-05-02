import React from "react";
// import { icons } from "../../service/icons";

type Props = {
  channel: string;
};

const IconUi = ({ channel }: Props) => {
  const data = icons.find((item) => item.name === channel);
  console.log(data);
  return <div>{channel}</div>;
};

export default IconUi;
