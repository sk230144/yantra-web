"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { PillLink } from "./motion";

export function WideTeam() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  // The photo opens from a narrow window to full width as it scrolls in.
  const clip = useTransform(scrollYProgress, [0, 1], ["inset(12% 18% 12% 18% round 48px)", "inset(0% 0% 0% 0% round 36px)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section className="mx-auto max-w-[1440px] px-8 pb-28 lg:px-12 lg:pb-36 xl:px-16">
      <motion.div ref={ref} style={reduce ? undefined : { clipPath: clip }} className="relative h-[clamp(420px,46vw,640px)] overflow-hidden rounded-[36px]">
        <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0">
          <Image src="/images/team-yantra.png" alt="Team Yantra Media" fill sizes="(min-width: 1440px) 1310px, 92vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-10 bottom-10 flex flex-wrap items-end justify-between gap-8 text-white lg:inset-x-14 lg:bottom-14">
          <div>
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.3em] text-white/60">Team Yantra Media</p>
            <h2 className="mt-4 max-w-[640px] text-[clamp(34px,3.6vw,54px)] font-bold leading-[1.05] tracking-[-0.04em]">
              25+ industry professionals. One connected team.
            </h2>
          </div>
          <PillLink href="#contact-us" tone="light">
            Get a call back from us!
          </PillLink>
        </div>
      </motion.div>

      <div className="mt-14 flex items-center justify-center gap-6">
        <Image src="/images/ym-logo-color.gif" alt="" width={84} height={84} unoptimized className="h-[84px] w-[84px] object-cover" />
        <div>
          <Image src="/images/yantramedia-wordmark.svg" alt="Yantramedia" width={174} height={26} />
          <p className="mt-1 font-display text-[26px] leading-none text-[#898989]">Agency</p>
        </div>
      </div>
    </section>
  );
}
