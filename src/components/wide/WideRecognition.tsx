"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CountUp, EASE, Reveal, SplitWords, TiltCard } from "./motion";

const AWARDS = [
  { src: "/images/award-1.png", alt: "Saptarshi Purkayastha receiving an Indian Awards trophy", position: "50% 22%" },
  { src: "/images/award-2.png", alt: "Yantra Media receiving a recognition", position: "35% 50%" },
  { src: "/images/award-3.png", alt: "Tech Digital Marketing Awards certificate", position: "50% 50%" },
];

// "Why Should you Trust Us!" figures from Figma.
const TRUST = [
  { value: 6, suffix: "+", label: "Years in business" },
  { value: 25, suffix: "+", label: "Industry professionals" },
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 1, suffix: "k+", label: "Keywords optimised" },
  { value: 150, suffix: "+", label: "Websites delivered" },
];

export function WideRecognition() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-[1440px] px-8 py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="grid items-center gap-16 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal className="text-center lg:text-left">
          <p className="font-display text-[15px] font-bold uppercase tracking-[0.8em] text-gold">Celebrating</p>
          <motion.div
            className="relative mx-auto mt-6 h-[200px] w-[290px] lg:mx-0"
            initial={reduce ? false : { scale: 0.85, rotate: -4, opacity: 0 }}
            whileInView={reduce ? undefined : { scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Image src="/images/six-years-logo.png" alt="Yantramedia — celebrating 6 years, 2020–26" fill sizes="290px" className="object-contain" />
          </motion.div>
          <p className="mx-auto mt-6 max-w-[380px] font-display text-[18px] font-medium leading-[1.55] text-gold lg:mx-0">
            6 Years of Yantra Media — empowering growth through technology, creativity &amp; innovation.
          </p>
        </Reveal>

        <div>
          <h2 className="mb-10 font-display text-[clamp(36px,3.6vw,52px)] font-normal tracking-[-0.03em] text-mist">
            <SplitWords text="Awards & Recognitions" />
          </h2>
          <ul className="grid grid-cols-3 gap-5">
            {AWARDS.map((award, i) => (
              <motion.li
                key={award.src}
                initial={reduce ? false : { opacity: 0, y: 60, rotate: (i - 1) * 4 }}
                whileInView={reduce ? undefined : { opacity: 1, y: i === 1 ? 40 : 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              >
                <TiltCard className="relative h-[clamp(240px,26vw,360px)] overflow-hidden rounded-[26px] shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
                  <Image src={award.src} alt={award.alt} fill sizes="(min-width: 1024px) 300px, 30vw" className="object-cover" style={{ objectPosition: award.position }} />
                </TiltCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="font-display text-[clamp(36px,3.6vw,52px)] font-normal tracking-[-0.03em] text-mist">
          <SplitWords text="Why should you trust us!" />
        </h2>
        <dl className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {TRUST.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className={`px-6 ${i > 0 ? "lg:border-l lg:border-black/10" : ""}`}>
              <dd className="font-display text-[clamp(52px,5vw,76px)] leading-none text-amber">
                <CountUp value={stat.value} suffix={stat.suffix} duration={1.6} />
              </dd>
              <dt className="mt-4 font-display text-[18px] text-[#a87e7e]">{stat.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
