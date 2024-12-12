import { Logo, PhoneBlock, SocialList } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-between space-y-4 py-10 md:flex-row">
          <div className="col-span-2 space-y-2">
            <Logo />
            <div>ТОВ Торговий дім &quot;БУДТЕПЛОІЗОЛ&quot;</div>
          </div>

          <div className="col-start-8">
            <PhoneBlock hideText={false} />
          </div>
          <div className="col-start-10 row-start-2">
            <SocialList className="mt-2 w-56 justify-items-center" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
