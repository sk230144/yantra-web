"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CountUp, Eyebrow, PillLink, Reveal, SplitWords } from "./motion";

const RESULTS = [
  { value: 6342, label: "Calls" },
  { value: 683, label: "Website enquiries" },
  { value: 2532, label: "Directions" },
];

export function WideSeoResults() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const frameY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const frameRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2]);
  const panelY = useTransform(scrollYProgress, [0, 1], [140, -110]);
  const chipY = useTransform(scrollYProgress, [0, 1], [80, -160]);

  return (
    <section id="results" ref={ref} className="relative isolate scroll-mt-20 overflow-hidden bg-navy py-28 text-white lg:py-36">
      <div aria-hidden className="absolute -right-40 top-0 -z-10 h-[620px] w-[620px] rounded-full bg-teal/25 blur-[140px]" />
      <div aria-hidden className="absolute -left-40 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-periwinkle/30 blur-[120px]" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-20 px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 xl:px-16">
        <div>
          <Reveal>
            <Eyebrow light>SEO / GEO / AEO results</Eyebrow>
          </Reveal>
          <h2 className="text-[clamp(40px,4.2vw,60px)] font-bold leading-[1.02] tracking-[-0.05em]">
            <SplitWords text="How strategic SEO drives sales & more Google calls." />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.7] text-white/65">
              Results generated over the last 3 months through SEO, GEO and AEO for one hospital partner.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-6">
              {RESULTS.map((result) => (
                <div key={result.label} className="border-t border-white/20 pt-5">
                  <dd className="text-[clamp(30px,3vw,44px)] font-bold leading-none tracking-[-0.03em] text-lime">
                    <CountUp value={result.value} suffix="+" />
                  </dd>
                  <dt className="mt-3 text-[14px] text-white/60">{result.label}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-12">
              <PillLink href="#contact-us" tone="light">
                Get a free audit
              </PillLink>
            </div>
          </Reveal>
        </div>

        <div className="relative pb-24 pr-6 lg:pb-16">
          {/* The Google results page, framed like a browser window at its natural proportions. */}
          <motion.div
            style={reduce ? undefined : { y: frameY, rotate: frameRotate }}
            className="overflow-hidden rounded-[22px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center gap-2 border-b border-black/5 bg-[#f4f5f8] px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 rounded-full bg-white px-4 py-1 text-[12px] text-black/45">google.com — jjims silchar</span>
            </div>
            <Image
              src="/images/gbp-browser.png"
              alt="Google search results showing the JJIMS Business Profile managed by Grow Medico"
              width={1170}
              height={863}
              quality={95}
              sizes="(min-width: 1024px) 700px, 90vw"
              className="h-auto w-full"
            />
          </motion.div>

          {/* The knowledge panel, enlarged so it reads crisply. */}
          <motion.div
            style={reduce ? undefined : { y: panelY }}
            className="absolute -bottom-6 right-0 w-[min(44%,280px)] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.4)] ring-1 ring-black/5"
          >
            <Image
              src="/images/gbp-knowledge-panel.png"
              alt="JJIMS Google Business Profile with 550 Google reviews"
              width={400}
              height={703}
              quality={95}
              sizes="280px"
              className="h-auto w-full"
            />
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: chipY }}
            className="absolute -left-6 top-[38%] flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-black shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8f0fe] text-[#1a73e8]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M4 20h2V10H4v10zm6 0h2V4h-2v16zm6 0h2v-7h-2v7z" />
              </svg>
            </span>
            <div>
              <p className="text-[20px] font-bold leading-none text-navy">
                <CountUp value={16288} />
              </p>
              <p className="mt-1 text-[12px] text-black/50">customer interactions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
