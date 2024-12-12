"use client";

import { Cart, Logo, MenuList } from "@/components";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  };
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <header className="bg-red sticky top-0 z-50 h-[80px] bg-white shadow-lg">
      <div className="screen-max-width flex h-full items-center gap-4">
        <Logo />
        <MenuList isShowMenu={showMenu} closeMenu={handleCloseMenu} />
        <Cart />
        <button
          onClick={handleToggleMenu}
          className="flex size-10 items-center justify-center rounded-full border md:hidden"
          aria-label="Toggle menu"
        >
          {showMenu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export { Navbar };
