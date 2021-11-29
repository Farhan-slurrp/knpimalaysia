import React from "react";
import { useRouter } from "next/router";

interface Props {
  title: string;
  menus: { title: string[]; link: string[] };
}

const DropDownMenu = ({ title, menus }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`inline-flex justify-center w-full px-8 py-4 font-semibold uppercase hover:bg-blue-600 ${
            menus["link"].includes(router.route) ? "bg-blue-600" : "bg-blue-500"
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute right-0 w-full bg-blue-500 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? "visible" : "invisible"
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
              className={`block px-4 py-2 text-sm text-white uppercase hover:bg-blue-600 ${
                menus["link"][idx] === router.route
                  ? "bg-blue-600"
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
