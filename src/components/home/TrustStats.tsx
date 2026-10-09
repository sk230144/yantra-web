"use client";

import { useRef, useState } from "react";

type Stat = {
  value: string;
  label: [string, string];
  /** Left edge of the number, in frame px (the strip continues past the 402px frame in Figma). */
  numberLeft: number;
  numberTop: number;
  /** Horizontal centre of the two-line label, in frame px. */
  labelCenter: number;
};

const STATS: Stat[] = [
  { value: "6+", label: ["Years in", "Business"], numberLeft: 60, numberTop: 7, labelCenter: 81 },
  { value: "25+", label: ["Industry", "Professionals"], numberLeft: 225, numberTop: 6, labelCenter: 264.5 },
  { value: "500+", label: ["Happy", "Client’s"], numberLeft: 429, numberTop: 7, labelCenter: 476 },
  { value: "1k+", label: ["Keywords", "Optimised"], numberLeft: 626, numberTop: 7, labelCenter: 656 },
  { value: "150+", label: ["Website", "Delivered"], numberLeft: 785, numberTop: 7, labelCenter: 835.5 },
];

/** Stats row of "Why Should you Trust Us!", positioned relative to the section (row top = 842px). */
export function TrustStats() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (el) setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  };

  const handleArrow = () => {
    scrollerRef.current?.scrollBy({ left: atEnd ? -scrollerRef.current.scrollWidth : 300, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="absolute inset-x-0 top-[842px] h-[130px] overflow-x-auto overscroll-x-contain scrollbar-none"
      >
        <dl className="relative ml-[calc(50%-201px)] h-full w-[940px] leading-[normal]">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <dt
                className="absolute top-[76px] -translate-x-1/2 whitespace-nowrap text-center text-[20px] text-[#a87e7e]"
                style={{ left: stat.labelCenter }}
              >
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </dt>
              <dd className="absolute text-[50px] text-amber" style={{ left: stat.numberLeft, top: stat.numberTop }}>
                {stat.value}
              </dd>
            </div>
          ))}
          <div aria-hidden className="absolute left-[172px] top-0 h-[130px] w-px bg-[#d9d9d9]" />
        </dl>
      </div>

      <button
        type="button"
        onClick={handleArrow}
        aria-label={atEnd ? "Back to first stats" : "More reasons to trust us"}
        className={`absolute left-[calc(50%+154px)] top-[887px] text-[30px] leading-[normal] text-mist transition-transform ${atEnd ? "rotate-180" : ""}`}
      >
        &gt;
      </button>
    </>
  );
}
