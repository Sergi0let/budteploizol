"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => setShowMenu((prev) => !prev);
  // const handleCloseMenu = () => setShowMenu(false);

  return (
    <header className="bg-red sticky top-0 z-50 h-[60px] bg-white shadow-lg">
      <div className="screen-max-width flex h-full items-center gap-2">
        <Link href={"/"} className="relative flex-1 font-black">
          <div className="absolute left-20 size-7 -translate-x-[2px] -translate-y-[2px] rounded-full bg-blue-600"></div>
          <span className="relative">
            Budteplo<span className="text-white">Izo</span>l
          </span>
        </Link>

        <ul
          className={cn(
            "bg-secondary-950 absolute right-0 top-0 z-50 flex h-screen w-screen transform flex-col flex-wrap items-center justify-center gap-x-8 gap-y-10 bg-blue-600 bg-white duration-300 ease-in-out md:relative md:h-fit md:w-fit md:translate-y-0 md:flex-row md:justify-start md:gap-y-0 md:bg-transparent",
            showMenu === true ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <li className="group relative z-50">
            <span className="relative cursor-pointer pr-6 md:group-hover:text-blue-600">
              Каталог
              <ChevronDown className="absolute right-0 top-1/2 hidden h-5 w-5 -translate-y-1/2 transform transition-all duration-300 ease-in-out group-hover:rotate-180 group-hover:text-blue-600 md:block" />
            </span>

            <ul className="bg-white transition-all delay-100 duration-300 ease-in-out md:absolute md:h-0 md:w-56 md:translate-y-4 md:overflow-hidden md:rounded-md md:opacity-0 md:shadow-xl md:group-hover:h-fit md:group-hover:-translate-y-0 md:group-hover:opacity-100">
              <li>
                <Link
                  className="block p-2 transition-colors duration-500 md:hover:bg-stroke md:hover:text-blue-600"
                  href={"/"}
                >
                  Коврики (карематы)
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 transition-colors duration-500 md:hover:bg-stroke md:hover:text-blue-600"
                  href={"/"}
                >
                  Звукоізоляція
                </Link>
              </li>
              <li>
                <Link
                  className="block p-2 transition-colors duration-500 md:hover:bg-stroke md:hover:text-blue-600"
                  href={"/"}
                >
                  Спортивні мати
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="transition-colors md:hover:text-blue-600"
              href={"/"}
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors md:hover:text-blue-600"
              href={"/"}
            >
              Контакти
            </Link>
          </li>
        </ul>

        <button className="group relative ml-6 flex size-10 items-center justify-center rounded-full bg-stroke">
          <ShoppingCart className="group-hover:text-hover" size="24" />
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-sm text-white">
            3
          </span>
        </button>

        <button
          onClick={handleToggleMenu}
          className="flex size-10 items-center justify-center rounded-full border md:hidden"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};

export { Navbar };
