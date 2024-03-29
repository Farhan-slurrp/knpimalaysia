import React from "react";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface Props {
  title: string;
  menus: { title: string[]; link: string[] };
}

const DropDownMenu = ({ title, menus }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  return (
    <div
      className="relative inline-block text-left w-max"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <button
          type="button"
          className={`inline-flex border-b md:border-0 border-white items-center justify-between md:justify-center w-screen md:w-max px-4 py-4 font-bold uppercase hover:bg-blue-600 ${
            menus["link"].includes(router.route)
              ? "bg-blue-500 md:bg-blue-700"
              : "bg-blue-500"
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 4000);
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <div className="block md:hidden">
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
        </button>
      </div>
      <div
        className={`z-50 md:absolute right-0 min-w-full w-screen md:w-max bg-blue-500 origin-top-right md:shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-b md:border-0 border-white ${
          isOpen ? "flex flex-col md:visible" : "hidden md:invisible"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div role="none">
          {menus["title"].map((menu, idx) => (
            <a
              href={menus["link"][idx]}
              className={`block px-4 py-4 md:py-2 text-xs text-white uppercase hover:bg-blue-600 ${
                menus["link"][idx] === router.route
                  ? "bg-blue-700"
                  : "bg-blue-500"
              }`}
              role="menuitem"
              tabIndex={-1}
              id={`menu-item-${idx}`}
              key={idx}
            >
              {menu}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
