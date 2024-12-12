import { PhoneBlock, SocialList } from "@/components";

const Footer = () => {
  return (
    <footer className="bg-dark-grey text-white">
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-between space-y-4 py-10 md:flex-row">
          <p className="col-span-2">&copy; 2021 Footer</p>

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
