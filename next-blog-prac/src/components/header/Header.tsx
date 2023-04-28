import React from "react";
import MainLogo from "./MainLogo";
import Nav from "./Nav";
import Search from "./Search";
import Social from "./Social";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-2/3 m-auto pt-20">
      <div className="flex justify-between align-middle py-1  relative">
        <Social />
        <MainLogo />
        <Search />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
