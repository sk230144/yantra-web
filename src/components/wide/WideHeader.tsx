"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PillLink, ScrollProgressBar } from "./motion";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process", wideOnly: true },
  { label: "Results", href: "#results", wideOnly: true },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about-us" },
];

export function WideHeader() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 24));

  return (
    <>
      <ScrollProgressBar />
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          compact ? "bg-white/80 shadow-[0_10px_40px_rgba(67,82,152,0.08)] backdrop-blur-xl" : "bg-white"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-8 transition-[height] duration-500 lg:px-12 xl:px-16 ${
            compact ? "h-[72px]" : "h-[96px]"
          }`}
        >
          <Link href="#top" aria-label="Grow Medico home" className="relative h-[50px] w-[124px] lg:h-[56px] lg:w-[138px]">
            <Image src="/images/grow-medico-logo.png" alt="Grow Medico by Yantra" fill sizes="138px" className="object-contain" />
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-7 text-[13px] font-semibold text-black/60 lg:gap-9">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 transition-colors hover:text-navy ${item.wideOnly ? "hidden lg:inline" : ""}`}
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-right scale-x-0 rounded-full bg-teal transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <PillLink href="#contact-us">Book a free audit</PillLink>
        </div>
      </header>
    </>
  );
}
