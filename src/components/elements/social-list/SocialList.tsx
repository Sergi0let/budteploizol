import { cn } from "@/lib/utils";
import { Telegram, Viber, Whatsapp } from "../icons";

type SocialListProps = {
  className?: string;
};

const SocialList = ({ className }: SocialListProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 items-center gap-1 sm:gap-4 md:gap-6",
        className,
      )}
    >
      <a target="_blank" href="https://wa.me/380674869044">
        <Whatsapp />
      </a>
      <a target="_blank" href="https://t.me/+380674080587">
        <Telegram />
      </a>
      <a
        target="_blank"
        className="w-6 md:w-auto"
        href="viber://chat?number=+380674869044"
      >
        <Viber />
      </a>
    </div>
  );
};

export { SocialList };
