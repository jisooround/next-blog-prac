import React from "react";

type Props = {};

const navList = [
  "Home",
  "Post",
  "Project",
  "Social",
  "#Tag",
  "Features",
  "Contact",
];

const Nav = (props: Props) => {
  return (
    <nav className=" flex justify-center py-6">
      <ul className="flex gap-5 p-3 bg-uBgColor shadow-md px-10 box-border text-15 font-serif text-uFontColor">
        {navList.map((menu, idx) => (
          <li key={idx}>{menu}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
