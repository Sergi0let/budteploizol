import { PhoneBlock, SocialList } from "@/components";

const ContactList = () => {
  return (
    <aside className="bg-dark-grey">
      <div className="screen-max-width flex h-[60px] justify-between">
        <PhoneBlock hideText />
        <SocialList />
      </div>
    </aside>
  );
};

export { ContactList };
