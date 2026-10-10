"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { DOCTORS, HOSPITALS } from "@/content/home";
import { EASE, Eyebrow, Reveal, SplitWords } from "./motion";

/** Hover (or tap) a hospital and it widens while the others narrow. */
function HospitalGallery() {
  const [active, setActive] = useState(0);
  return (
    <ul className="flex h-[520px] gap-3">
      {HOSPITALS.map((hospital, i) => {
        const open = i === active;
        return (
          <li
            key={hospital.image}
            onMouseEnter={() => setActive(i)}
            className={`relative min-w-0 overflow-hidden rounded-[30px] transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              open ? "grow-[5]" : "grow"
            }`}
            style={{ flexBasis: 0 }}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={open}
              aria-label={`${hospital.name}, ${hospital.location}`}
              className="group absolute inset-0 text-left"
            >
              <Image
                src={hospital.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 760px, 70vw"
                className={`object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] ${open ? "scale-100" : "scale-110"}`}
              />
              <span className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 ${open ? "opacity-100" : "opacity-60"}`} />
              <span className="absolute left-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-[13px] font-bold text-white backdrop-blur-md">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`absolute inset-x-8 bottom-8 text-white transition-all duration-700 ${
                  open ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="block whitespace-nowrap text-[30px] font-bold leading-tight">{hospital.name}</span>
                <span className="mt-1 block whitespace-nowrap text-[15px] text-white/70">{hospital.location}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const CARD = 300;
const GAP = 24;

/** Draggable doctor carousel with arrow buttons. */
function DoctorCarousel() {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [minX, setMinX] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackWidth = DOCTORS.length * CARD + (DOCTORS.length - 1) * GAP;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => setMinX(Math.min(0, el.clientWidth - trackWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [trackWidth]);

  useEffect(
    () =>
      x.on("change", (v) => {
        setAtStart(v > -4);
        setAtEnd(v < minX + 4);
      }),
    [x, minX],
  );

  const step = (direction: 1 | -1) => {
    const target = Math.max(minX, Math.min(0, x.get() - direction * (CARD + GAP) * 2));
    animate(x, target, reduce ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 30 });
  };

  return (
    <div>
      <div className="mb-10 flex items-end justify-between gap-10">
        <p className="max-w-[560px] text-[clamp(24px,2.4vw,34px)] font-bold leading-[1.2] tracking-[-0.03em] text-navy">
          A few of the doctors we partner with for their marketing and digital presence.
        </p>
        <div className="flex shrink-0 gap-3">
          {([-1, 1] as const).map((direction) => {
            const disabled = direction === -1 ? atStart : atEnd;
            return (
              <button
                key={direction}
                type="button"
                onClick={() => step(direction)}
                disabled={disabled}
                aria-label={direction === -1 ? "Previous doctors" : "Next doctors"}
                className="grid h-14 w-14 place-items-center rounded-full border border-black/15 text-[20px] text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white disabled:pointer-events-none disabled:opacity-30"
              >
                {direction === -1 ? "←" : "→"}
              </button>
            );
          })}
        </div>
      </div>

      <div ref={viewportRef} className="overflow-hidden">
        <motion.ul
          drag="x"
          dragConstraints={{ left: minX, right: 0 }}
          dragElastic={0.08}
          style={{ x, width: trackWidth }}
          className="flex cursor-grab gap-6 active:cursor-grabbing"
        >
          {DOCTORS.map((doctor, i) => (
            <motion.li
              key={doctor.image}
              className="group relative h-[420px] shrink-0 overflow-hidden rounded-[30px] bg-mist-blue"
              style={{ width: CARD }}
              initial={reduce ? false : { opacity: 0, y: 50 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: EASE }}
            >
              <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.specialty}`}
                fill
                draggable={false}
                sizes="300px"
                className="pointer-events-none object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <p className="text-[22px] font-bold leading-tight">{doctor.name}</p>
                <p className="mt-1 text-[14px] text-white/70">{doctor.specialty}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export function WidePartners() {
  return (
    <section id="partners" className="scroll-mt-20 bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
          <div>
            <Reveal>
              <Eyebrow>Healthcare partners</Eyebrow>
            </Reveal>
            <h2 className="text-[clamp(40px,4.4vw,62px)] font-bold leading-[1.02] tracking-[-0.05em] text-navy">
              <SplitWords text="Few of the hospitals we are associated with" />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[440px] text-[17px] leading-[1.7] text-black/55">
              We become an extension of the teams we support — combining clinical sensitivity with commercial focus.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <HospitalGallery />
        </Reveal>

        <div className="mt-28">
          <DoctorCarousel />
        </div>

        <Reveal className="mt-16">
          <blockquote className="relative overflow-hidden rounded-[30px] bg-steel px-10 py-12 text-white lg:px-14">
            <span aria-hidden className="absolute -top-10 right-8 font-display text-[220px] font-black leading-none text-white/10">
              “
            </span>
            <p className="max-w-[920px] text-[clamp(20px,2vw,26px)] italic leading-[1.5] text-white/90">
              We work on doctors’ profile reputation management and boost organic lead acquisition from Google and
              websites — building doctors’ digital reputation and driving organic leads.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
