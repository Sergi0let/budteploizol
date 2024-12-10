import { Phone } from "lucide-react";

const PhoneBlock = () => {
  return (
    <div className="flex h-full items-center text-sm text-neutral-300">
      <a
        href="tel:+380674869044"
        className="group mr-4 flex gap-3 transition-colors hover:text-white"
      >
        <Phone size={30} className="transition-all group-hover:animate-pulse" />
        <div>
          <div className="transition-colors">Менеджер - Олександр</div>
          <div className="transition-colors">+380 (67) 486-90-44</div>
        </div>
      </a>
      <a
        href="tel:+380668972989"
        className="group mr-4 flex gap-3 transition-colors hover:text-white"
      >
        <Phone size={30} className="group-hover:animate-pulse" />
        <div className="">
          <div className="transition-colors">Менеджер - Анна</div>
          <div className="transition-colors">+380 (66) 897-29-89</div>
        </div>
      </a>
    </div>
  );
};

export { PhoneBlock };
