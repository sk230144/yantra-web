"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 36,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Each word slides up out of a mask, one after another. */
export function SplitWords({
  text,
  className = "",
  delay = 0,
  stagger = 0.07,
  onMount = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate immediately instead of waiting to scroll into view (for the hero). */
  onMount?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  // The wrapper watches the viewport: the words start clipped out of sight, so they can't detect it themselves.
  return (
    <motion.span
      className={className}
      initial={reduce ? false : "hidden"}
      animate={reduce || !onMount ? undefined : "shown"}
      whileInView={reduce || onMount ? undefined : "shown"}
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block origin-bottom-left"
              variants={{ hidden: { y: "110%", rotate: 4 }, shown: { y: "0%", rotate: 0 } }}
              transition={{ duration: 0.95, delay: delay + i * stagger, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}

const numberFormat = new Intl.NumberFormat("en-US");

/** Counts from 0 to `value` the first time it scrolls into view. */
export function CountUp({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  // Server HTML shows the real number; on the client start from 0 until it is seen.
  useEffect(() => {
    if (!reduce) setDisplay(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration, ease: EASE, onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {numberFormat.format(display)}
      {suffix}
    </span>
  );
}

/** A link that leans toward the pointer and springs back when it leaves. */
export function MagneticLink({
  href,
  children,
  className = "",
  strength = 0.3,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span style={{ x, y }} className="inline-block">
      <Link href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
        {children}
      </Link>
    </motion.span>
  );
}

/** Primary pill button with a fill that sweeps in on hover. */
export function PillLink({ href, children, tone = "dark" }: { href: string; children: ReactNode; tone?: "dark" | "light" | "lime" }) {
  const base = {
    dark: "bg-black text-white",
    light: "bg-white text-black",
    lime: "bg-lime text-black",
  }[tone];
  const sweep = tone === "dark" ? "bg-navy" : "bg-teal";
  return (
    <MagneticLink
      href={href}
      className={`group relative isolate inline-flex items-center gap-4 overflow-hidden rounded-full py-4 pl-7 pr-4 text-[14px] font-bold transition-colors duration-500 hover:text-white ${base}`}
    >
      <span className={`absolute inset-0 -z-10 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 ${sweep}`} />
      {children}
      <span
        aria-hidden
        className={`grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
          tone === "dark" ? "bg-white/15" : "bg-black/10 group-hover:bg-white/20"
        }`}
      >
        ↗
      </span>
    </MagneticLink>
  );
}

/** Card that tilts in 3D toward the pointer. */
export function TiltCard({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="[perspective:1100px]">
      <motion.div onMouseMove={onMove} onMouseLeave={onLeave} style={{ rotateX: rx, rotateY: ry }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}

/** Surface with a soft light that follows the pointer (uses --spot-x / --spot-y). */
export function Spotlight({ children, className = "", color = "rgba(4,169,179,0.14)" }: { children: ReactNode; className?: string; color?: string }) {
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`group/spot relative ${className}`} style={{ "--spot-color": color } as CSSProperties}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-color), transparent 70%)" }}
      />
      {children}
    </div>
  );
}

/** Scroll progress (0→1) of an element moving through the viewport. */
export function useSectionProgress(offset: ["start end", "end start"] | ["start start", "end end"] | ["start 0.85", "end 0.45"] = ["start end", "end start"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, progress: scrollYProgress };
}

/** Image that drifts slower than the page as it scrolls by. */
export function ParallaxImage({ children, className = "", distance = 60 }: { children: ReactNode; className?: string; distance?: number }) {
  const reduce = useReducedMotion();
  const { ref, progress } = useSectionProgress();
  const y = useTransform(progress, [0, 1], [-distance, distance]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[80px] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}

/** One word of a scroll-lit statement: dim until the scroll position passes its slot. */
export function ScrollWord({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

/** Thin bar fixed to the top of the window showing page scroll progress. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-teal via-periwinkle to-lime" />;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.26em] ${light ? "text-white/60" : "text-navy/60"}`}>
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 motion-reduce:animate-none ${light ? "bg-lime" : "bg-teal"}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${light ? "bg-lime" : "bg-teal"}`} />
      </span>
      {children}
    </p>
  );
}
