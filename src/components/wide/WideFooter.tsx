"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PillLink, Reveal, SplitWords } from "./motion";

// Footer content from the Figma frame.
const OTHER_SERVICES = [
  "Brand Identity",
  "Social Media Marketing",
  "Website Design and Development",
  "Video Production",
  "Visual Designing",
  "2D and 3D Animation",
  "Mobile Apps",
  "Digital Marketing",
];

const OFFICES = [
  { city: "Gurgaon", label: "Corporate Office", lines: ["C-17, Devender Vihar, Near HongKong", "Market Sec-56, Gurugram", "Haryana 122011"] },
  { city: "Noida", label: "Founders Office", lines: ["771, Gaur City Mall, Greater Noida West", "Uttar Pradesh", "Pin- 201318"] },
];

const EXPLORE = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "#about-us" },
];

export function WideFooter() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const wordX = useTransform(scrollYProgress, [0, 1], ["18%", "0%"]);

  return (
    <footer id="contact-us" ref={ref} className="relative isolate scroll-mt-20 overflow-hidden bg-forest pt-28 text-white">
      <Image src="/images/footer-bg.png" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-25 mix-blend-overlay" />

      <div className="mx-auto max-w-[1440px] px-8 lg:px-12 xl:px-16">
        <div className="flex flex-wrap items-end justify-between gap-10 border-b border-white/15 pb-20">
          <h2 className="max-w-[860px] text-[clamp(48px,5.6vw,84px)] font-bold leading-[1] tracking-[-0.05em]">
            <SplitWords text="Ready to grow your healthcare brand?" />
          </h2>
          <Reveal delay={0.2}>
            <PillLink href="mailto:hello@yantramedia.com" tone="lime">
              Join us for a coffee
            </PillLink>
          </Reveal>
        </div>

        <Reveal className="grid gap-12 py-16 font-display text-[15px] leading-[1.8] text-white/70 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_.6fr]">
          <div>
            <p className="text-[18px] font-bold text-white">Other Services</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 lg:grid-cols-1">
              {OTHER_SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          {OFFICES.map((office) => (
            <div key={office.city}>
              <p className="text-[18px] font-bold text-white">{office.city}</p>
              <address className="mt-4 not-italic">
                <span className="block text-white/50">{office.label}:</span>
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
          <div>
            <p className="text-[18px] font-bold text-white">Explore</p>
            <ul className="mt-4">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-2 transition-colors hover:text-lime">
                    {item.label}
                    <span className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <motion.p
        aria-hidden
        style={reduce ? undefined : { x: wordX }}
        className="select-none whitespace-nowrap px-6 text-[clamp(120px,17vw,280px)] font-bold leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]"
      >
        Grow Medico
      </motion.p>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-8 font-display text-[13px] text-white/45 lg:px-12 xl:px-16">
        <p>© 2026 Yantra Media Company. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
