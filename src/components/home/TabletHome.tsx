"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const services = [
  ["01", "Website development", "Fast healthcare websites designed around the patient journey."],
  ["02", "Google Business Profile", "Local visibility and reputation management that earns trust."],
  ["03", "SEO / GEO / AEO", "Search strategies for Google, AI discovery and high-intent queries."],
  ["04", "Lead generation", "Measurable systems that turn attention into qualified appointments."],
];

const workflow = [
  "Briefing & requirement mapping",
  "Research & planning",
  "Wireframing & content",
  "Experience & visual design",
  "Development & integration",
  "CRM, leads & maintenance",
];

const results = [["6,342+", "Calls"], ["683+", "Enquiries"], ["2,532+", "Directions"]];

function TabletReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TabletEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] ${light ? "text-white/55" : "text-navy/55"}`}>
      <span className={`h-2 w-2 rounded-full ${light ? "bg-[#c2ff1c]" : "bg-teal"}`} />
      {children}
    </p>
  );
}

function TabletButton({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={`inline-flex min-h-12 items-center gap-4 rounded-full px-6 text-[13px] font-bold ${light ? "bg-white text-black" : "bg-black text-white"}`}>
      {children}<span aria-hidden>↗</span>
    </Link>
  );
}

export function TabletHome() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="tablet-site overflow-x-clip bg-white text-[#151515]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-8">
          <Link href="#tablet-top" aria-label="Grow Medico home" className="relative h-12 w-32">
            <Image src="/images/grow-medico-logo.png" alt="Grow Medico by Yantra" fill priority sizes="128px" className="object-contain" />
          </Link>
          <nav aria-label="Tablet navigation" className="flex items-center gap-6 text-[12px] font-semibold text-black/60">
            <Link href="#tablet-services">Services</Link><Link href="#tablet-work">Work</Link><Link href="#tablet-about">About</Link>
          </nav>
          <TabletButton href="#tablet-contact">Free audit</TabletButton>
        </div>
      </header>

      <main id="tablet-top">
        <section className="relative isolate overflow-hidden px-8 pb-20 pt-16">
          <span aria-hidden className="absolute -left-14 top-0 -z-10 text-[430px] font-black leading-none text-navy/[0.04]">+</span>
          <TabletReveal>
            <TabletEyebrow>Healthcare growth, designed end-to-end</TabletEyebrow>
            <h1 className="max-w-[690px] text-[clamp(68px,10vw,94px)] font-bold leading-[0.9] tracking-[-0.06em] text-navy">We grow <span className="text-teal">healthcare.</span></h1>
            <p className="mt-7 max-w-[610px] text-[18px] leading-[1.6] text-black/55">Digital growth systems for hospitals, clinics and doctors — from high-performing websites to organic discovery and qualified leads.</p>
          </TabletReveal>
          <div className="mt-10 grid grid-cols-[1.1fr_.9fr] gap-5">
            <TabletReveal>
              <motion.div whileHover={reduceMotion ? undefined : { y: -5 }} className="relative h-[420px] overflow-hidden rounded-[34px] shadow-[0_25px_65px_rgba(67,82,152,.18)]">
                <Image src="/images/doctor-kinnor-das.png" alt="Doctor supported by Grow Medico" fill sizes="60vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                <p className="absolute bottom-7 left-7 max-w-[300px] text-[25px] font-bold leading-tight text-white">Better digital experiences. Stronger patient trust.</p>
              </motion.div>
            </TabletReveal>
            <TabletReveal delay={0.08} className="flex flex-col gap-5">
              <div className="flex flex-1 flex-col justify-between rounded-[30px] bg-[#f1f3ff] p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">Proven impact</p>
                <div><p className="text-[64px] font-bold leading-none text-navy">2X</p><p className="mt-2 text-[14px] text-black/50">growth for healthcare brands</p></div>
              </div>
              <TabletButton href="#tablet-contact">Start a conversation</TabletButton>
            </TabletReveal>
          </div>
        </section>

        <section className="border-y border-black/5 px-8 py-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">Trusted across industries</p>
          <div className="mt-7 grid grid-cols-4 items-center gap-8">
            {[
              ["/images/client-csb-bank.png", "CSB Bank"], ["/images/client-indrive.png", "inDrive"],
              ["/images/client-fortis.png", "Fortis"], ["/images/grow-medico-logo.png", "Grow Medico"],
            ].map(([src, alt]) => <div key={alt} className="relative h-12 grayscale"><Image src={src} alt={alt} fill sizes="150px" className="object-contain" /></div>)}
          </div>
        </section>

        <section id="tablet-services" className="px-8 py-24">
          <TabletReveal><TabletEyebrow>What we do</TabletEyebrow><h2 className="max-w-[640px] text-[52px] font-bold leading-[1.02] tracking-[-0.045em] text-navy">Built for every stage of digital growth.</h2></TabletReveal>
          <div className="mt-14 grid grid-cols-2 border-l border-t border-black/10">
            {services.map(([number, title, text], index) => (
              <TabletReveal key={number} delay={(index % 2) * 0.06}>
                <article className="min-h-[245px] border-b border-r border-black/10 p-7">
                  <span className="text-[12px] font-bold text-teal">{number}</span>
                  <h3 className="mt-12 text-[26px] font-bold leading-tight text-navy">{title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.55] text-black/50">{text}</p>
                </article>
              </TabletReveal>
            ))}
          </div>
        </section>

        <section id="tablet-work" className="bg-[#f2f4ff] px-8 py-24">
          <TabletReveal><TabletEyebrow>Featured website</TabletEyebrow><h2 className="max-w-[680px] text-[54px] font-bold leading-[1.02] tracking-[-0.05em] text-navy">Designed around the patient, not the template.</h2></TabletReveal>
          <TabletReveal className="mt-12" delay={0.08}><div className="mx-auto max-w-[680px] overflow-hidden rounded-[30px] bg-white shadow-[0_25px_70px_rgba(67,82,152,.16)]"><Image src="/images/featured-website.jpg" alt="Full Mediland hospital website designed by Grow Medico" width={1080} height={1920} sizes="88vw" className="h-auto w-full" /></div></TabletReveal>
        </section>

        <section className="px-8 py-24">
          <TabletReveal><TabletEyebrow>Our workflow</TabletEyebrow><h2 className="text-[50px] font-bold tracking-[-0.05em] text-navy">Clarity at every step.</h2></TabletReveal>
          <ol className="mt-12 grid grid-cols-2 gap-x-10 gap-y-10">
            {workflow.map((item, index) => <TabletReveal key={item} delay={(index % 2) * 0.05}><li className="border-t border-black/15 pt-5"><span className="font-arial-black text-[58px] leading-none text-transparent [-webkit-text-stroke:1px_#6b85e4]">{index + 1}</span><p className="mt-4 max-w-[270px] text-[18px] font-bold leading-snug text-navy">{item}</p></li></TabletReveal>)}
          </ol>
        </section>

        <section className="bg-navy px-8 py-24 text-white">
          <TabletReveal><TabletEyebrow light>SEO that proves its value</TabletEyebrow><h2 className="max-w-[680px] text-[52px] font-bold leading-[1.03] tracking-[-0.05em]">Search visibility that turns into real-world action.</h2></TabletReveal>
          <div className="mt-12 grid grid-cols-[1fr_.9fr] gap-10">
            <TabletReveal>
              <div className="grid grid-cols-3 gap-4">
                {results.map(([value, label]) => <div key={label} className="border-t border-white/20 pt-4"><p className="text-[27px] font-bold text-[#c2ff1c]">{value}</p><p className="mt-2 text-[12px] text-white/55">{label}</p></div>)}
              </div>
              <p className="mt-10 text-[17px] leading-[1.7] text-white/60">We improve the experience, earn relevance and optimise based on real performance — no shortcuts or mystery metrics.</p>
              <div className="mt-8"><TabletButton href="#tablet-contact" light>Get a free audit</TabletButton></div>
            </TabletReveal>
            <TabletReveal delay={0.08}><div className="relative aspect-[1.15] overflow-hidden rounded-[26px] bg-white shadow-[14px_16px_0_rgba(4,169,179,.45)]"><Image src="/images/gbp-screenshot.png" alt="Google Business Profile results" fill sizes="45vw" className="object-cover" /></div></TabletReveal>
          </div>
        </section>

        <section className="bg-black px-8 py-20 text-white">
          <TabletReveal><TabletEyebrow light>Measured growth since 2020</TabletEyebrow><p className="max-w-[840px] text-[48px] font-medium leading-[1.1] tracking-[-0.04em]">We’ve helped <strong className="text-[#c2ff1c]">45+ hospitals & clinics</strong> across India achieve up to <strong className="text-teal">2X growth.</strong></p></TabletReveal>
        </section>

        <section className="px-8 py-24">
          <TabletReveal><TabletEyebrow>Healthcare partners</TabletEyebrow><h2 className="text-[50px] font-bold tracking-[-0.05em] text-navy">Built on long-term trust.</h2></TabletReveal>
          <div className="mt-12 grid grid-cols-2 gap-5">
            <TabletReveal><article className="relative h-[390px] overflow-hidden rounded-[28px]"><Image src="/images/life-save-hospital.png" alt="Life Save Hospital" fill sizes="48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 text-white"><p className="text-[25px] font-bold">Life Save Hospital</p><p className="text-[13px] text-white/65">Bijoy Nagar, Guwahati</p></div></article></TabletReveal>
            <TabletReveal delay={0.06}><article className="relative h-[390px] overflow-hidden rounded-[28px]"><Image src="/images/doctor-kinnor-das.png" alt="Dr. Kinnor Das" fill sizes="48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 text-white"><p className="text-[25px] font-bold">Dr. Kinnor Das</p><p className="text-[13px] text-white/65">Dermatologist</p></div></article></TabletReveal>
          </div>
        </section>

        <section className="bg-[#f7f7f7] px-8 py-24">
          <div className="grid grid-cols-2 gap-8">
            <TabletReveal><TabletEyebrow>Recent delivery</TabletEyebrow><h2 className="text-[38px] font-bold leading-tight text-steel">Designed carefully, delivered completely.</h2><div className="relative mt-8 aspect-[1.35] overflow-hidden rounded-[24px]"><Image src="/images/recent-delivery.png" alt="Recent website delivery" fill sizes="46vw" className="object-cover" /></div></TabletReveal>
            <TabletReveal delay={0.06}><div className="rounded-[28px] bg-periwinkle p-8 text-white"><TabletEyebrow light>Case study</TabletEyebrow><div className="relative aspect-[1.5] overflow-hidden rounded-[20px]"><Image src="/images/jjims-hospital.png" alt="JJIMS Hospital" fill sizes="42vw" className="object-cover" /></div><h3 className="mt-7 text-[28px] font-bold leading-tight">360° marketing and end-to-end management</h3><div className="mt-7"><TabletButton href="#tablet-contact" light>Request report</TabletButton></div></div></TabletReveal>
          </div>
        </section>

        <section id="tablet-about" className="bg-black px-8 py-24 text-white">
          <TabletReveal><TabletEyebrow light>About Yantra Media</TabletEyebrow><h2 className="max-w-[680px] text-[52px] font-bold leading-[1.04] tracking-[-0.05em]">Creativity and technology, working as one.</h2><p className="mt-7 max-w-[720px] text-[20px] leading-[1.65] text-white/60">A creative and technology-driven agency delivering branding, digital marketing, UI/UX, web development and performance marketing.</p></TabletReveal>
          <TabletReveal className="relative mt-12 aspect-[2.1] overflow-hidden rounded-[28px]" delay={0.06}><Image src="/images/about-banner.png" alt="Yantra Media work showcase" fill sizes="92vw" className="object-cover" /></TabletReveal>
          <TabletReveal className="mt-10 flex items-center gap-5"><div className="relative h-20 w-20 overflow-hidden rounded-full"><Image src="/images/founder.png" alt="Saptarshi Purkayastha" fill sizes="80px" className="object-cover" /></div><div><p className="text-[19px] font-bold">Saptarshi Purkayastha</p><p className="text-[12px] text-white/45">Founder & CEO</p></div></TabletReveal>
        </section>

        <section className="px-8 py-24">
          <div className="grid grid-cols-[.72fr_1.28fr] items-center gap-10">
            <TabletReveal><p className="text-[11px] font-bold uppercase tracking-[0.45em] text-gold">Celebrating</p><div className="relative mt-4 h-[150px] w-[220px]"><Image src="/images/six-years-logo.png" alt="Yantra Media — 6 years" fill sizes="220px" className="object-contain" /></div><p className="text-[14px] leading-[1.55] text-gold">Six years of technology, creativity and innovation.</p></TabletReveal>
            <div className="grid grid-cols-3 gap-3">{["award-1.png", "award-2.png", "award-3.png"].map((award, index) => <TabletReveal key={award} delay={index * .05}><div className="relative h-[240px] overflow-hidden rounded-[18px]"><Image src={`/images/${award}`} alt="Yantra Media award" fill sizes="25vw" className="object-cover" /></div></TabletReveal>)}</div>
          </div>
          <TabletReveal className="mt-16 overflow-hidden rounded-[28px] bg-[#f1f2f5]"><div className="relative h-[340px]"><Image src="/images/team-yantra.png" alt="Team Yantra Media" fill sizes="92vw" className="object-cover" /></div><div className="flex items-center justify-between gap-8 p-8"><h3 className="max-w-[500px] text-[34px] font-bold leading-tight text-navy">25+ industry professionals. One connected team.</h3><TabletButton href="#tablet-contact">Work with us</TabletButton></div></TabletReveal>
        </section>
      </main>

      <footer id="tablet-contact" className="relative isolate overflow-hidden bg-forest px-8 py-20 text-white">
        <Image src="/images/footer-bg.png" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20 mix-blend-overlay" />
        <TabletReveal><h2 className="max-w-[700px] text-[54px] font-bold leading-[1.04] tracking-[-0.05em]">Ready to grow your healthcare brand?</h2><div className="mt-8"><TabletButton href="mailto:hello@yantramedia.com" light>Let’s talk</TabletButton></div></TabletReveal>
        <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/15 pt-10 text-[12px] leading-[1.7] text-white/55">
          <div><p className="font-bold text-white">Grow Medico</p><p className="mt-3">Digital growth for hospitals, clinics and doctors.</p></div>
          <address className="not-italic"><strong className="text-white">Gurgaon</strong><br />C-17, Devender Vihar<br />Sec-56, Gurugram 122011</address>
          <address className="not-italic"><strong className="text-white">Noida</strong><br />771, Gaur City Mall<br />Greater Noida West 201318</address>
        </div>
        <p className="mt-12 text-[11px] text-white/30">© 2026 Yantra Media Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
