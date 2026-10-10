"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, Eyebrow, Reveal, SplitWords, Spotlight } from "./motion";

// Service names from the Figma "Our Services" list; card colours are its four band colours.
const SERVICES = [
  {
    title: "Website Development & Maintenance",
    text: "Fast, conversion-focused healthcare websites built around the patient journey — and kept healthy after launch.",
    color: "#7d95ec",
  },
  {
    title: "Google Business Profile Management & Optimisation",
    text: "Local visibility, profile optimisation and reputation management that turns searches into calls and visits.",
    color: "#7e9aff",
  },
  {
    title: "SEO / GEO / AEO",
    text: "Search, Generative Engine and Answer Engine Optimisation so patients find you on Google and in AI answers.",
    color: "#738eed",
  },
  {
    title: "Lead Generation",
    text: "Measurable acquisition systems that turn attention into qualified enquiries and booked appointments.",
    color: "#6b85e4",
  },
];

export function WideServices() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="mx-auto max-w-[1440px] scroll-mt-24 px-8 py-28 lg:px-12 lg:py-36 xl:px-16">
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_.8fr]">
        <div>
          <Reveal>
            <Eyebrow>Our services</Eyebrow>
          </Reveal>
          <h2 className="text-[clamp(44px,4.6vw,68px)] font-bold leading-[1] tracking-[-0.05em] text-navy">
            <SplitWords text="Built for every stage of digital growth." />
          </h2>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-[520px] text-[18px] leading-[1.7] text-black/55">
            Strategy, design, technology and marketing under one roof. Every service is tied to a measurable outcome —
            more discovery, more trust and more appointments.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <motion.li
            key={service.title}
            initial={reduce ? false : { opacity: 0, y: 60, rotate: 2 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          >
            <Spotlight
              color="rgba(255,255,255,0.28)"
              className="group h-full overflow-hidden rounded-[30px] text-white transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2"
            >
              <article className="relative flex h-full min-h-[380px] flex-col p-8" style={{ backgroundColor: service.color }}>
                <div className="flex items-start justify-between">
                  <span className="text-[64px] font-bold leading-none tracking-[-0.06em] text-white/90 transition-transform duration-500 group-hover:scale-110">
                    {i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-[18px] transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-navy"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mt-auto text-[24px] font-bold leading-[1.15] tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/80">{service.text}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-10 select-none font-display text-[220px] font-black leading-none text-white/10 transition-transform duration-700 group-hover:-rotate-45"
                >
                  +
                </span>
              </article>
            </Spotlight>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
