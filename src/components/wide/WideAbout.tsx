"use client";

import Image from "next/image";
import { Eyebrow, ParallaxImage, Reveal, SplitWords } from "./motion";

export function WideAbout() {
  return (
    <section id="about-us" className="scroll-mt-20 bg-black py-28 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow light>About us</Eyebrow>
            </Reveal>
            <h2 className="font-display text-[clamp(44px,4.6vw,66px)] font-bold leading-[1.02] tracking-[-0.04em]">
              <SplitWords text="Creativity and technology, working as one." />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="font-display text-[clamp(20px,1.8vw,24px)] font-medium leading-[1.6] text-mist">
              Yantra Media is a creative and technology driven agency delivering innovative solutions in branding, digital
              marketing, UI/UX, web development, performance marketing, and technology.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/15">
                <Image src="/images/founder.png" alt="Saptarshi Purkayastha" fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-[22px] font-light">Saptarshi Purkayastha</p>
                <p className="mt-1 font-display text-[13px] font-bold">Founder &amp; CEO</p>
              </div>
              <a
                href="#"
                aria-label="Saptarshi Purkayastha on LinkedIn"
                className="ml-auto grid h-12 w-12 place-items-center rounded-full bg-white text-[18px] font-bold text-[#0a66c2] transition-transform duration-300 hover:-translate-y-1"
              >
                in
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-20">
          <ParallaxImage className="aspect-[2.4] rounded-[32px]" distance={70}>
            <Image src="/images/about-banner-trimmed.png" alt="Yantra Media social media content showcase" fill sizes="(min-width: 1440px) 1310px, 92vw" className="object-cover" />
          </ParallaxImage>
        </Reveal>
      </div>
    </section>
  );
}
