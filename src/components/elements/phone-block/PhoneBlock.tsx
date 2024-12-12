import { Phone } from "lucide-react";

const PhoneBlock = ({ hideText }: { hideText?: boolean }) => {
  return (
    <div className="md:text-md flex h-full items-center text-nowrap text-xs text-neutral-300">
      <a
        href="tel:+380674869044"
        className="group mr-4 flex items-center gap-1 transition-colors hover:text-white md:gap-3"
      >
        <Phone className="size-4 transition-all group-hover:animate-pulse md:size-6" />
        {!hideText && (
          <div className="transition-colors">
            <div>Менеджер - Олександр</div>
            <div>+380 (67) 486-90-44</div>
          </div>
        )}
        {hideText && (
          <div>
            <div className="hidden transition-colors md:block">
              <div>Менеджер - Олександр</div>
              <div>+380 (67) 486-90-44</div>
            </div>
            <div className="transition-colors md:hidden">
              <div>Менеджер</div>
              <div>Олександр</div>
            </div>
          </div>
        )}
      </a>
      <a
        href="tel:+380668972989"
        className="group mr-4 flex items-center gap-1 transition-colors hover:text-white md:gap-3"
      >
        <Phone className="size-4 group-hover:animate-pulse md:size-6" />
        {!hideText && (
          <div className="transition-colors">
            <div>Менеджер - Анна</div>
            <div>+380 (66) 897-29-89</div>
          </div>
        )}
        {hideText && (
          <div>
            <div className="hidden transition-colors md:block">
              <div>Менеджер - Анна</div>
              <div>+380 (66) 897-29-89</div>
            </div>
            <div className="transition-colors md:hidden">
              <div>Менеджер</div>
              <div>Анна</div>
            </div>
          </div>
        )}
      </a>
    </div>
  );
};

export { PhoneBlock };
