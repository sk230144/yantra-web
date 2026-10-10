"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { EASE, Eyebrow, ParallaxImage, PillLink, Reveal, SplitWords, TiltCard } from "./motion";

// Points from the Figma case study list (its repeated placeholder rows trimmed).
const REPORT_POINTS = [
  "How we have done the overall branding",
  "Strategy and report on 2x brand presence",
  "Website experience, search and reputation",
  "Lead systems and ongoing management",
];

export function WideDelivery() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f7f7f7] py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
        <div>
          <Reveal>
            <Eyebrow>Our recent deliveries</Eyebrow>
          </Reveal>
          <h2 className="text-[clamp(38px,4vw,56px)] font-bold leading-[1.04] tracking-[-0.045em] text-steel">
            <SplitWords text="Designed carefully, delivered completely." />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.7] text-black/55">
              We design every section around the patient experience — easy checkout with minimal clicks, and a fast,
              hassle-free, dynamic website that we keep managing for you.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <TiltCard max={5} className="group relative overflow-hidden rounded-[30px] shadow-[0_30px_80px_rgba(74,104,158,0.22)]">
              <ParallaxImage className="aspect-[1.4]" distance={40}>
                <Image src="/images/recent-delivery.png" alt="Dr. Sambuddha Dhar's website delivered by Grow Medico" fill sizes="660px" className="object-cover" />
              </ParallaxImage>
              <span className="absolute inset-0 grid place-items-center">
                <motion.span
                  className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-navy shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
                  animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden>
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
                  </svg>
                </motion.span>
              </span>
            </TiltCard>
          </Reveal>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 70 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative overflow-hidden rounded-[36px] bg-periwinkle p-10 text-white lg:p-12"
        >
          <span aria-hidden className="absolute -right-16 -top-24 select-none font-display text-[360px] font-black leading-none text-white/10">
            +
          </span>
          <Eyebrow light>Case study</Eyebrow>
          <ParallaxImage className="aspect-[1.55] rounded-[24px]" distance={30}>
            <Image src="/images/jjims-hospital.png" alt="JJIMS Hospital in golden daylight" fill sizes="620px" className="object-cover" />
          </ParallaxImage>
          <h3 className="mt-10 text-[clamp(28px,2.6vw,38px)] font-bold leading-[1.1] tracking-[-0.03em]">
            360 marketing report and overall management
          </h3>
          <ol className="mt-8 space-y-1">
            {REPORT_POINTS.map((point, i) => (
              <motion.li
                key={point}
                className="flex items-center gap-5 border-b border-white/15 py-4"
                initial={reduce ? false : { opacity: 0, x: 30 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <span className="text-[40px] font-light leading-none text-white/90">{i + 1}</span>
                <span className="text-[16px] text-white/85">{point}</span>
              </motion.li>
            ))}
          </ol>
          <div className="mt-10">
            <PillLink href="#contact-us" tone="light">
              Download report
            </PillLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
