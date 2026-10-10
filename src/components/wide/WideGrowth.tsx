"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";
import { PillLink, ScrollWord } from "./motion";

// Figma statement; highlighted phrases keep their own colour.
const WORDS: { text: string; tone?: "lime" | "teal" }[] = [
  ..."Since 2020, we’ve helped".split(" ").map((text) => ({ text })),
  { text: "45+", tone: "lime" },
  { text: "hospitals", tone: "lime" },
  ..."& clinics across India achieve up to".split(" ").map((text) => ({ text })),
  { text: "2X", tone: "teal" },
  { text: "growth.", tone: "teal" },
];

export function WideGrowth() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  return (
    <section className="relative isolate overflow-hidden bg-black py-32 text-white lg:py-44">
      <motion.span
        aria-hidden
        className="absolute -right-10 top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[520px] font-black leading-none text-white/[0.05]"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        +
      </motion.span>
      <div ref={ref} className="mx-auto max-w-[1440px] px-8 lg:px-12 xl:px-16">
        <p className="max-w-[1100px] text-[clamp(44px,5.4vw,84px)] font-bold leading-[1.05] tracking-[-0.045em]">
          {WORDS.map((word, i) => {
            const start = i / WORDS.length;
            const color = word.tone === "lime" ? "text-lime" : word.tone === "teal" ? "text-teal" : "";
            return (
              <span key={`${word.text}-${i}`} className={color}>
                {reduce ? word.text : <ScrollWord progress={scrollYProgress} range={[start, start + 1 / WORDS.length]}>{word.text}</ScrollWord>}
                {i < WORDS.length - 1 ? " " : null}
              </span>
            );
          })}
        </p>
        <div className="mt-14">
          <PillLink href="#contact-us" tone="lime">
            Get a free demo
          </PillLink>
        </div>
      </div>
    </section>
  );
}
