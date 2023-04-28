import React from "react";
import { GoSearch } from "react-icons/go";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="bg-uTwitter w-12 h-12 rounded-full flex justify-center items-center text-uWhite hover:">
      <GoSearch />
    </div>
  );
};

export default Search;
