"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { EASE, Eyebrow, Reveal, SplitWords } from "./motion";

// Step names from the Figma "Our Proven Workflow".
const STEPS = [
  { title: "Client Briefing & Requirement Mapping", text: "We learn your specialities, patients and goals before anything is designed." },
  { title: "Research & Planning", text: "Competitors, search demand and patient intent shape the plan." },
  { title: "Wireframing & Content Structuring", text: "Every page is structured so patients find answers in seconds." },
  { title: "User Experience & FrontEnd Design", text: "Calm, trustworthy interfaces that work beautifully on every phone." },
  { title: "Development & Integration", text: "Fast, secure builds connected to booking, calls and analytics." },
  { title: "CRM, Lead and Website Management & Maintenance", text: "We keep leads flowing and the site healthy long after launch." },
];

export function WideWorkflow() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });

  return (
    <section id="process" className="mx-auto max-w-[1440px] scroll-mt-20 px-8 py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <Reveal>
            <Eyebrow>Our proven workflow</Eyebrow>
          </Reveal>
          <h2 className="text-[clamp(44px,4.6vw,66px)] font-bold leading-[1] tracking-[-0.05em] text-navy">
            <SplitWords text="Clarity at every step." />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[420px] text-[17px] leading-[1.7] text-black/55">
              A transparent, six-step process that moves from business goals to reliable delivery — without the usual
              agency fog.
            </p>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative">
          <div aria-hidden className="absolute bottom-6 left-[38px] top-6 w-px bg-black/10">
            <motion.div style={reduce ? undefined : { scaleY: line }} className="h-full w-full origin-top bg-gradient-to-b from-lime to-leaf" />
          </div>
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative grid grid-cols-[78px_1fr] items-start gap-8 py-8"
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <span className="relative z-10 grid h-[78px] w-[78px] place-items-center rounded-full bg-white">
                <motion.span
                  className="bg-gradient-to-b from-lime to-leaf bg-clip-text font-arial-black text-[64px] leading-none text-transparent"
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                >
                  {i + 1}
                </motion.span>
              </span>
              <div className="border-b border-black/10 pb-8 pt-3">
                <h3 className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-navy">{step.title}</h3>
                <p className="mt-3 max-w-[520px] text-[16px] leading-[1.65] text-black/55">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
