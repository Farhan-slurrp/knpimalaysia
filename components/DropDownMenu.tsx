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
    <div
      className="relative inline-block text-left"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <button
          type="button"
          className={`inline-flex justify-center w-full px-6 py-6 font-semibold uppercase hover:bg-blue-600 ${
            menus["link"].includes(router.route) ? "bg-blue-700" : "bg-blue-500"
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onMouseEnter={() => setIsOpen(true)}
        >
          {title}
        </button>
      </div>
      <div
        className={`z-50 absolute right-0 w-full bg-blue-500 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
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
