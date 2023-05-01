import React from "react";

type Props = {
  name: string;
  children: React.ReactNode;
};

const BlockUi = ({ name, children }: Props) => {
  return (
    <div className="w-full py-12 px-8">
      <div className="flex justify-start items-center mb-7">
        <h3 className="text-2xl font-bold text-uPrimary pr-4 min-w-fit">
          {name}
        </h3>
        <hr className="border-1 border-uRed w-full"></hr>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BlockUi;
