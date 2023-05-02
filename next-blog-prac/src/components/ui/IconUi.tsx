import React from "react";
// import { icons } from "../../service/icons";

type Props = {
  channel: string;
};

const IconUi = ({ channel }: Props) => {
  return <div>{channel}</div>;
};

export default IconUi;
