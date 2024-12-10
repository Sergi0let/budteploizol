"use client";

import { useGSAP } from "@gsap/react";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type SubTitleProps = {
  className?: string;
  subTitle: string;
};

function Subtitle({ className, subTitle }: SubTitleProps) {
  const main = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (main.current && dotRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top 70%",
          end: "top 20%",
          toggleActions: "restart none complete none",
          // markers: true,
        },
      });
      tl.to(textRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "easeOut",
      });
      tl.to(dotRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce",
      });
    }
  }, []);

  return (
    <div
      ref={main}
      className="mb-6 flex w-full items-center gap-2 border-b border-neutral-300 pb-4 sm:mb-8"
    >
      <span
        ref={dotRef}
        className="relative block size-2 -translate-y-12 rounded-full bg-blue-600 opacity-0"
      />
      <span
        ref={textRef}
        className={cx(
          "box transltate-y-6 translate-x-20 text-xl font-bold opacity-0",
          className,
        )}
      >
        {subTitle}
      </span>
    </div>
  );
}

export { Subtitle };
