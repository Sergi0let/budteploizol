import Image from "next/image";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="carousel overflow-hidden rounded-2xl">
      <Marquee speed={10} direction="left" className="h-full overflow-hidden">
        <Image
          className="main-bg"
          src="/slider/slider-1.jpg"
          alt="Slide 1"
          width={1920}
          height={850}
        />
        <Image
          className="main-bg"
          src="/slider/slider-2.jpg"
          alt="Slide 1"
          width={1920}
          height={850}
        />
        <Image
          className="main-bg"
          src="/slider/slider-3.jpg"
          alt="Slide 1"
          width={1920}
          height={850}
        />
        <Image
          className="main-bg"
          src="/slider/slider-4.jpg"
          alt="Slide 1"
          width={1920}
          height={850}
        />
      </Marquee>
    </div>
  );
};

export { Slider };
