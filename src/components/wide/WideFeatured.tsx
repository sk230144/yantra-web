"use client";

import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EASE, Eyebrow, Reveal, SplitWords } from "./motion";

// Trimmed mockup (white band removed): 1011×1667.
const SHOT = { src: "/images/featured-website-trimmed.jpg", width: 1011, height: 1667 };

const HIGHLIGHTS = [
  "Lab services and home sample collection, front and centre",
  "Patient testimonials and Google rating built into the page",
  "Doctors, departments and appointments one tap away",
];

export function WideFeatured() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const overflow = useMotionValue(0);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const y = useTransform(() => -overflow.get() * progress.get());
  useMotionValueEvent(progress, "change", (p) => setActive(Math.min(HIGHLIGHTS.length - 1, Math.floor(p * HIGHLIGHTS.length))));

  // How far the screenshot is taller than its window, kept current on resize.
  useEffect(() => {
    const el = windowRef.current;
    if (!el) return;
    const measure = () => overflow.set(Math.max(0, (el.clientWidth * SHOT.height) / SHOT.width - el.clientHeight));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [overflow]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`relative scroll-mt-20 bg-mist-blue ${reduce ? "py-28" : "h-[260vh]"}`}
    >
      <div className={reduce ? "" : "sticky top-[72px] flex h-[calc(100vh-72px)] items-center overflow-hidden"}>
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <Reveal>
              <Eyebrow>Featured website</Eyebrow>
            </Reveal>
            <h2 className="text-[clamp(40px,4.4vw,64px)] font-bold leading-[1] tracking-[-0.05em] text-navy">
              <SplitWords text="Designed around the patient, not the template." />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[480px] text-[17px] leading-[1.7] text-black/55">
                Every screen is planned to make essential information easier to find and appointments easier to book.
                Scroll to walk through the Mediland Hospital website.
              </p>
              <ul className="mt-9 hidden space-y-3 lg:block">
                {HIGHLIGHTS.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-500 ${
                      i === active || reduce ? "bg-white text-navy shadow-[0_14px_40px_rgba(67,82,152,0.12)]" : "text-black/40"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] transition-colors duration-500 ${
                        i === active || reduce ? "bg-teal text-white" : "bg-black/5"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 80, rotate: 2 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <div
              ref={windowRef}
              className={`relative overflow-hidden rounded-[36px] bg-white shadow-[0_40px_100px_rgba(67,82,152,0.22)] ring-1 ring-black/5 ${
                reduce ? "h-[70vh] overflow-y-auto" : "h-[calc(100vh-200px)] max-h-[760px] min-h-[460px]"
              }`}
            >
              <motion.div style={reduce ? undefined : { y }}>
                <Image
                  src={SHOT.src}
                  alt="Mediland Hospital website designed by Grow Medico"
                  width={SHOT.width}
                  height={SHOT.height}
                  quality={90}
                  sizes="(min-width: 1024px) 760px, 90vw"
                  className="h-auto w-full"
                />
              </motion.div>
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            {!reduce && (
              <div aria-hidden className="absolute -right-5 top-10 bottom-10 hidden w-[3px] overflow-hidden rounded-full bg-navy/10 lg:block">
                <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top rounded-full bg-teal" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
