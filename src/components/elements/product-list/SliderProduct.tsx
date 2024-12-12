"use client";

// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Bag from "../icons/Bag";

const SliderProduct = () => {
  return (
    <Swiper // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={16}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // When the viewport width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // When the viewport width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When the viewport width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
        // When the viewport width is >= 1280px
        1280: {
          slidesPerView: 4,
        },
      }}
      className="my-6 grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <SwiperSlide key={index} className="relative border">
          <Link href="/" className="group">
            <figure className="overflow-hidden">
              <Image
                className="h-auto w-full object-cover transition-transform group-hover:scale-105"
                src="/products/material-dlya-zvukoizolyatsiyi.webp"
                width={300}
                height={200}
                alt="Product 1"
              />
            </figure>
            <h3 className="mt-2 px-2 text-xs text-gray-600 group-hover:text-blue-600 md:mt-4 md:px-4 md:text-sm">
              Матеріал для звукоізоляції будинків і авто, Verdani ТМ (товщина 10
              мм, рулон 50 м2) 33 кг/м3
            </h3>
          </Link>
          <div className="relative space-y-1 p-2 md:space-y-2 md:p-4">
            <p className="text-lg">
              Ціна:{" "}
              <span className="font-regular px-2 text-sm text-gray-600 line-through">
                155 ₴/кв.м
              </span>
              <span className="font-semibold">155 ₴/кв.м</span>
            </p>
            <p className="text-sm text-gray-600">
              <span>В наявності</span> | <span>Код: 33/10 100</span>
            </p>
            <div className="flex items-center text-sm">
              <span className="grow">Додати в корзину</span>
              <button className="group absolute bottom-1 right-1 flex size-12 h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-blue-50 transition-all hover:bg-stroke md:bottom-3 md:right-3">
                <Bag className="size-7 transition-transform group-hover:scale-105" />
              </button>
            </div>
          </div>
          <div className="absolute left-0 top-0 flex h-1 w-fit items-center justify-center bg-red-500 p-4">
            50%
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderProduct;
