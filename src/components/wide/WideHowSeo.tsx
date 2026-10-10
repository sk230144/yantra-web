"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Eyebrow, Reveal, SplitWords } from "./motion";

// Based on the Figma "How SEO Works / How we do it?" list (its duplicated fifth step replaced).
const STEPS = [
  "Customising your website into a user-friendly experience with a smooth checkout",
  "Smooth checkout, enquiry and payment integration",
  "Proper analysis of your competitors, keyword intent and research",
  "Ranking your niche keywords on Google for more organic reach and conversions",
  "Measuring rankings, calls and conversions — and improving every month",
];

function Step({ index, text }: { index: number; text: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  // "Active" while the step crosses the middle band of the screen.
  const active = useInView(ref, { margin: "-42% 0px -42% 0px" }) || !!reduce;

  return (
    <li ref={ref} className="grid grid-cols-[72px_1fr] items-center gap-6 border-b border-black/10 py-10">
      <span
        className={`grid h-14 w-14 place-items-center rounded-full text-[15px] font-bold transition-all duration-500 ${
          active ? "scale-110 bg-teal text-white shadow-[0_12px_30px_rgba(4,169,179,0.35)]" : "bg-black/[0.04] text-black/30"
        }`}
      >
        0{index + 1}
      </span>
      <p
        className={`text-[clamp(22px,2.2vw,30px)] font-medium leading-[1.3] tracking-[-0.02em] transition-colors duration-500 ${
          active ? "text-navy" : "text-black/25"
        }`}
      >
        {text}
      </p>
    </li>
  );
}

export function WideHowSeo() {
  return (
    <section className="mx-auto max-w-[1440px] px-8 py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <Reveal>
            <Eyebrow>How SEO works</Eyebrow>
          </Reveal>
          <h2 className="text-[clamp(44px,4.4vw,62px)] font-bold leading-[1.02] tracking-[-0.05em] text-navy">
            <SplitWords text="How we do it?" />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[400px] text-[17px] leading-[1.7] text-black/55">
              No shortcuts or mystery metrics. We improve the experience, earn relevance and optimise based on real
              performance.
            </p>
          </Reveal>
        </div>
        <ol>
          {STEPS.map((text, i) => (
            <Step key={text} index={i} text={text} />
          ))}
        </ol>
      </div>
    </section>
  );
}
