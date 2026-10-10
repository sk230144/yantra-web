"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { DOCTORS } from "@/content/home";
import { CountUp, EASE, Eyebrow, PillLink, SplitWords } from "./motion";

const CYCLE_MS = 3200;

// Resting pose for the visible cards of the stack (0 = front).
const STACK = [
  { x: "0%", y: 0, rotate: -3, scale: 1, opacity: 1 },
  { x: "9%", y: -18, rotate: 4, scale: 0.94, opacity: 1 },
  { x: "17%", y: -34, rotate: 10, scale: 0.88, opacity: 0.9 },
];
const HIDDEN = { x: "17%", y: -34, rotate: 10, scale: 0.86, opacity: 0 };
const EXIT = { x: "-75%", y: 40, rotate: -18, scale: 0.92, opacity: 0 };

function DoctorDeck() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = DOCTORS.length;

  useEffect(() => {
    if (reduce || paused || !inView) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % total), CYCLE_MS);
    return () => clearInterval(timer);
  }, [reduce, paused, inView, total]);

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[540px] w-full max-w-[460px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Doctors we partner with"
    >
      {DOCTORS.map((doctor, i) => {
        const pos = (i - active + total) % total;
        const pose = pos < STACK.length ? STACK[pos] : pos === total - 1 ? EXIT : HIDDEN;
        return (
          <motion.figure
            key={doctor.image}
            aria-hidden={pos !== 0}
            className="absolute left-0 top-[34px] h-[480px] w-[84%] overflow-hidden rounded-[36px] bg-mist-blue shadow-[0_40px_90px_rgba(67,82,152,0.28)]"
            style={{ zIndex: pos === total - 1 ? 40 : 30 - pos * 10, transformOrigin: "50% 100%" }}
            initial={false}
            animate={pose}
            transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
          >
            <Image src={doctor.image} alt={`${doctor.name}, ${doctor.specialty}`} fill sizes="400px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
            <figcaption className="absolute inset-x-7 bottom-7 text-white">
              <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                Partner doctor
              </span>
              <p className="text-[28px] font-bold leading-tight">{doctor.name}</p>
              <p className="mt-1 text-[15px] text-white/70">{doctor.specialty}</p>
            </figcaption>
          </motion.figure>
        );
      })}

      <div className="absolute -bottom-2 left-0 flex gap-2">
        {DOCTORS.map((doctor, i) => (
          <button
            key={doctor.image}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${doctor.name}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-navy" : "w-2 bg-navy/25 hover:bg-navy/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingChip({ children, className, delay }: { children: ReactNode; className: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute z-50 rounded-[22px] bg-white/90 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl ${className}`}
      initial={reduce ? false : { opacity: 0, y: 30, scale: 0.9 }}
      animate={reduce ? undefined : { opacity: 1, y: [0, -10, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay, ease: EASE },
        y: { duration: 5, delay: delay + 0.7, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

export function WideHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Slow-moving colour fields behind the hero. */}
      <motion.div
        aria-hidden
        className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-teal/15 blur-[110px]"
        animate={reduce ? undefined : { x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-0 -z-10 h-[560px] w-[560px] rounded-full bg-periwinkle/20 blur-[120px]"
        animate={reduce ? undefined : { x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute -left-16 top-[-120px] -z-10 select-none font-display text-[620px] font-black leading-none text-navy/[0.04]"
        animate={reduce ? undefined : { rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        +
      </motion.span>

      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-8 pb-24 pt-16 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:pt-10 xl:px-16">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Eyebrow>A Yantra Media company</Eyebrow>
          </motion.div>
          <h1 className="text-[clamp(60px,6.3vw,104px)] font-bold leading-[0.92] tracking-[-0.055em]">
            <SplitWords text="We are" onMount delay={0.1} className="block whitespace-nowrap text-navy" />
            <SplitWords text="Grow Medico" onMount delay={0.28} className="block whitespace-nowrap text-teal" />
          </h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
          >
            <p className="mt-8 text-[clamp(22px,2vw,28px)] font-bold tracking-[-0.02em] text-black/80">
              Designed for hospitals, clinics &amp; doctors.
            </p>
            <p className="mt-4 max-w-[560px] text-[18px] leading-[1.65] text-black/55">
              Websites, Google Business Profiles, SEO/GEO/AEO and lead generation — one growth system that brings patients
              to your door.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <PillLink href="#contact-us">Get a free audit</PillLink>
              <a href="#work" className="group inline-flex items-center gap-2 text-[14px] font-bold text-navy">
                See our work
                <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </a>
            </div>

            <dl className="mt-14 grid max-w-[560px] grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {[
                { value: 45, suffix: "+", label: "Hospitals & clinics" },
                { value: 2, suffix: "X", label: "Growth delivered" },
                { value: 6, suffix: "+", label: "Years in business" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dd className="text-[44px] font-bold leading-none tracking-[-0.04em] text-navy">
                    <CountUp value={stat.value} suffix={stat.suffix} duration={1.6} />
                  </dd>
                  <dt className="mt-2 text-[13px] text-black/50">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        <div className="relative">
          <DoctorDeck />
          <FloatingChip className="-left-4 top-24 hidden w-[210px] xl:block xl:-left-14" delay={1.1}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal/15 text-teal">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                </svg>
              </span>
              <div>
                <p className="text-[22px] font-bold leading-none text-navy">
                  <CountUp value={6342} suffix="+" />
                </p>
                <p className="mt-1 text-[12px] text-black/50">Google calls in 3 months</p>
              </div>
            </div>
          </FloatingChip>
          <FloatingChip className="-right-2 bottom-16 w-[220px]" delay={1.35}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Proven impact</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-[46px] font-bold leading-none tracking-[-0.04em] text-navy">2X</p>
              <svg viewBox="0 0 100 40" className="h-10 w-24 text-teal" fill="none" aria-hidden>
                <motion.path
                  d="M2 36 C 20 34, 26 22, 40 24 S 62 12, 72 14 S 90 4, 98 3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={reduce ? undefined : { pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 1.6, ease: EASE }}
                />
              </svg>
            </div>
            <p className="mt-1 text-[12px] text-black/50">growth for healthcare brands</p>
          </FloatingChip>
        </div>
      </div>
    </section>
  );
}
