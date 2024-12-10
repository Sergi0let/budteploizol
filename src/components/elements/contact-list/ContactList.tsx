import { PhoneBlock, SocialList } from "@/components";

const ContactList = () => {
  return (
    <aside className="bg-[#333333]">
      <div className="screen-max-width flex h-[60px] justify-between">
        <PhoneBlock />
        <SocialList />
      </div>
    </aside>
  );
};

export { ContactList };
