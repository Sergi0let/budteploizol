import navLinks from "@/data/nav-links.json";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PhoneBlock } from "../phone-block";
import { SocialList } from "../social-list";

type MenuListProps = {
  isShowMenu: boolean;
  closeMenu: () => void;
};

const MenuList = ({ isShowMenu, closeMenu }: MenuListProps) => {
  const menuClasses = cn(
    "absolute left-0  right-0 top-[80px] z-50 flex h-screen w-full flex-col overflow-hidden bg-white transition-all md:flex-row  duration-500 md:static md:h-full md:w-auto md:overflow-auto",
    isShowMenu ? "scale-1" : "scale-0 md:scale-100",
  );

  const renderMenuItems = () => (
    <ul className="flex w-full flex-col flex-wrap items-start justify-start gap-x-4 duration-300 ease-in-out md:relative md:h-full md:w-fit md:flex-row md:items-center md:justify-start md:gap-y-0 md:bg-transparent lg:gap-x-8">
      {navLinks.links.map(({ name, url }: { [key: string]: string }) => (
        <li key={name} className="w-full md:w-fit">
          <Link
            onClick={closeMenu}
            className="inline-block w-full border-b border-gray-200 py-4 pl-8 pr-2 text-xl font-medium transition-colors md:w-auto md:translate-y-0 md:border-none md:py-0 md:pl-0 md:pr-0 md:text-sm md:font-normal md:hover:text-blue-600 lg:text-xl"
            href={url}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderFooter = () => (
    <div className="flex flex-col items-center justify-between gap-4 px-10 pt-16 sm:flex-row md:hidden">
      <PhoneBlock className="text-black" hideText />
      <SocialList />
    </div>
  );

  return (
    <div className={menuClasses}>
      {renderMenuItems()}
      {renderFooter()}
    </div>
  );
};

export { MenuList };
