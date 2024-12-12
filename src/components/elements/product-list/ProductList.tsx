"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductItem } from "../product-item";
import { Subtitle } from "../subtitle";

type ProductListProps = {
  title: string;
  category: string;
  products: Array<unknown>;
};

const ProductList = ({
  title = "",
  category = "#",
  products,
}: ProductListProps) => {
  return (
    <section className="my-10 md:my-14">
      <div className="screen-max-width relative">
        <Subtitle subTitle={title} link={category} />
        <div className="mt-6">
          <Swiper
            modules={[Navigation, A11y, Autoplay, Pagination, Scrollbar]}
            spaceBetween={16}
            navigation={{
              prevEl: ".product-slider-prev",
              nextEl: ".product-slider-next",
            }}
            wrapperTag="ul"
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((_, index) => (
              <SwiperSlide key={index} tag="li">
                <ProductItem />
              </SwiperSlide>
            ))}
            <div className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-center gap-9 pt-4">
              <button className="product-slider-prev group flex size-12 items-center justify-center rounded-full bg-blue-50 transition-all hover:bg-stroke disabled:border disabled:bg-transparent">
                <ChevronLeft className="transition-colors group-hover:text-blue-600" />
              </button>
              <button className="product-slider-next group flex size-12 items-center justify-center rounded-full bg-blue-50 transition-all hover:bg-stroke disabled:border disabled:bg-transparent">
                <ChevronRight className="transition-colors group-hover:text-blue-600" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
