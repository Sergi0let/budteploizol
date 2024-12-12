import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={"/"} className={cn("relative flex-1 font-black", className)}>
      <div className="absolute left-20 size-7 -translate-x-[2px] -translate-y-[2px] rounded-full bg-blue-600"></div>
      <span className="relative">
        Budteplo<span className="text-white">Izo</span>l
      </span>
    </Link>
  );
};

export { Logo };
