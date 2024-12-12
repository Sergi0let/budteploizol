import { PhoneBlock, SocialList } from "@/components";
import { cn } from "@/lib/utils";

type ContactListProps = {
  className?: string;
};
const ContactList = ({ className }: ContactListProps) => {
  return (
    <aside className={cn("bg-dark-grey", className)}>
      <div className="screen-max-width flex h-[60px] justify-between">
        <PhoneBlock hideText />
        <SocialList />
      </div>
    </aside>
  );
};

export { ContactList };
