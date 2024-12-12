"use client";

import { useGSAP } from "@gsap/react";
import cx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type SubTitleProps = {
  className?: string;
  subTitle: string;
  link?: string;
};

function Subtitle({ className, subTitle, link }: SubTitleProps) {
  const main = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const linkRef = useRef<HTMLSpanElement>(null);
  const linkArrow = useRef<SVGSVGElement>(null);

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
    if (
      linkRef.current &&
      linkArrow.current &&
      main.current &&
      dotRef.current &&
      textRef.current
    ) {
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
      tl.to(linkRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "easeOut",
      });
      tl.to(linkArrow.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "easeOut",
      });
    }
  }, []);

  return (
    <div ref={main} className="mb-4 flex w-full items-center gap-2 md:mb-6">
      <span
        ref={dotRef}
        className="relative block size-2 -translate-y-12 rounded-full bg-blue-600 opacity-0"
      />
      <span
        ref={textRef}
        className={cx(
          "box transltate-y-6 flex-1 translate-x-20 text-xl font-bold opacity-0",
          className,
        )}
      >
        {subTitle}
      </span>
      {link && (
        <Link
          href={link}
          className="flex items-center text-xs text-neutral-600 transition-colors hover:text-blue-500 md:text-base"
        >
          <span ref={linkRef} className="translate-x-20 opacity-0">
            Дивитися все
          </span>
          <MoveRight
            ref={linkArrow}
            className="ml-2 size-3 translate-x-20 opacity-0 md:size-4"
          />
        </Link>
      )}
    </div>
  );
}

export { Subtitle };
