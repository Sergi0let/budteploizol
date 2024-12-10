import { Slider } from "../slider";

const Hero = () => {
  return (
    <div className="screen-max-width relative mt-2 h-[240px] md:h-[320px]">
      <h1 className="h1 relative z-10 flex h-full w-full items-center justify-center px-4 text-center text-6xl font-bold text-white md:px-10">
        Захист від шуму – комфорт у деталях
      </h1>
      <Slider />
    </div>
  );
};

export { Hero };
