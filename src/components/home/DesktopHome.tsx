"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const services = [
  ["01", "Website development", "Fast, conversion-focused healthcare websites built around the patient journey."],
  ["02", "Google Business Profile", "Local visibility, profile optimisation and reputation management that earns trust."],
  ["03", "SEO / GEO / AEO", "Search strategies designed for Google, AI discovery and high-intent healthcare queries."],
  ["04", "Lead generation", "Measurable acquisition systems that turn attention into qualified appointments."],
];

const workflow = [
  "Briefing & requirement mapping",
  "Research & planning",
  "Wireframing & content",
  "Experience & visual design",
  "Development & integration",
  "CRM, leads & maintenance",
];

const seoSteps = [
  "Build a clear, patient-friendly website experience",
  "Create smooth enquiry and appointment journeys",
  "Analyse competitors, search intent and keywords",
  "Optimise high-value pages for organic discovery",
  "Measure rankings, calls and conversions continuously",
];

const results = [
  ["6,342+", "Calls"],
  ["683+", "Website enquiries"],
  ["2,532+", "Direction requests"],
];

const clients = [
  { src: "/images/client-csb-bank.png", alt: "CSB Bank" },
  { src: "/images/client-indrive.png", alt: "inDrive" },
  { src: "/images/client-fortis.png", alt: "Fortis" },
  { src: "/images/grow-medico-logo.png", alt: "Grow Medico" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.24em] ${light ? "text-white/55" : "text-navy/55"}`}>
      <span className={`h-2 w-2 rounded-full ${light ? "bg-[#c2ff1c]" : "bg-teal"}`} />
      {children}
    </p>
  );
}

function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-5 rounded-full px-6 py-4 text-[13px] font-bold transition-colors ${
        light ? "bg-white text-black hover:bg-[#c2ff1c]" : "bg-black text-white hover:bg-navy"
      }`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
    </Link>
  );
}

export function DesktopHome() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="desktop-site bg-white text-[#151515]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-10 xl:px-16">
          <Link href="#top" aria-label="Grow Medico home" className="relative h-[58px] w-[142px]">
            <Image src="/images/grow-medico-logo.png" alt="Grow Medico by Yantra" fill priority sizes="142px" className="object-contain" />
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-9 text-[13px] font-semibold text-black/65">
            <Link className="transition-colors hover:text-black" href="#services">Services</Link>
            <Link className="transition-colors hover:text-black" href="#work">Our work</Link>
            <Link className="transition-colors hover:text-black" href="#process">Process</Link>
            <Link className="transition-colors hover:text-black" href="#about-desktop">About</Link>
          </nav>
          <ArrowLink href="#contact-desktop">Book a free audit</ArrowLink>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[760px] overflow-hidden border-b border-black/5">
          <motion.span
            aria-hidden
            className="absolute -left-12 top-[-205px] -z-10 select-none font-display text-[730px] font-black leading-none text-navy/[0.045]"
            animate={reduceMotion ? undefined : { rotate: [0, 5, 0], scale: [1, 1.035, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            +
          </motion.span>
          <div className="mx-auto grid min-h-[760px] max-w-[1440px] grid-cols-[1.05fr_.95fr] items-center gap-16 px-10 py-20 xl:px-16">
            <div className="relative z-10 pt-4">
              <Reveal>
                <Eyebrow>Healthcare growth, designed end-to-end</Eyebrow>
                <h1 className="max-w-[760px] text-[clamp(70px,7vw,118px)] font-bold leading-[0.88] tracking-[-0.065em] text-navy">
                  We grow
                  <span className="block text-teal">healthcare.</span>
                </h1>
                <p className="mt-9 max-w-[575px] text-[20px] leading-[1.6] text-black/55">
                  Digital growth systems for hospitals, clinics and doctors — from high-performing websites to organic discovery and qualified leads.
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <ArrowLink href="#contact-desktop">Start a conversation</ArrowLink>
                  <Link href="#work" className="border-b border-black pb-1 text-[13px] font-bold">Explore our work</Link>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative h-[590px]" delay={0.12}>
              <motion.div
                className="absolute left-[3%] top-[3%] h-[76%] w-[77%] overflow-hidden rounded-[44px] bg-[#edf0ff] shadow-[0_35px_80px_rgba(67,82,152,.2)]"
                whileHover={reduceMotion ? undefined : { y: -8, rotate: -0.6 }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              >
                <Image src="/images/doctor-kinnor-das.png" alt="Doctor supported by Grow Medico" fill sizes="550px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
                <p className="absolute bottom-8 left-8 max-w-[260px] text-[24px] font-bold leading-tight text-white">Better digital experiences. Stronger patient trust.</p>
              </motion.div>
              <motion.div
                className="absolute bottom-[1%] right-0 w-[58%] rounded-[30px] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,.14)]"
                initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">Proven impact</p>
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-[58px] font-bold leading-none text-navy">2X</p>
                  <p className="max-w-[120px] text-right text-[13px] leading-snug text-black/50">growth for healthcare brands</p>
                </div>
              </motion.div>
              <motion.span
                aria-hidden
                className="absolute right-[3%] top-[1%] text-[112px] font-light leading-none text-teal"
                animate={reduceMotion ? undefined : { rotate: [0, 90, 90, 180], opacity: [1, .5, 1, 1] }}
                transition={{ duration: 9, times: [0, .35, .6, 1], repeat: Infinity, ease: "easeInOut" }}
              >+</motion.span>
            </Reveal>
          </div>
        </section>

        <section aria-label="Selected clients" className="overflow-hidden border-b border-black/5 py-10">
          <div className="mx-auto flex max-w-[1440px] items-center px-10 xl:px-16">
            <p className="w-[210px] shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-black/35">Trusted across industries</p>
            <motion.div
              className="flex flex-1 items-center justify-around gap-14"
              animate={reduceMotion ? undefined : { x: [0, 12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {clients.map((client) => (
                <div key={client.alt} className="relative h-14 w-40 grayscale transition duration-500 hover:grayscale-0">
                  <Image src={client.src} alt={client.alt} fill sizes="160px" className="object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1440px] px-10 py-32 xl:px-16">
          <Reveal className="grid grid-cols-[.75fr_1.25fr] gap-16">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="text-[56px] font-bold leading-[1.02] tracking-[-0.045em] text-navy">Built for every stage of digital growth.</h2>
            </div>
            <p className="max-w-[650px] self-end text-[19px] leading-[1.65] text-black/50">Strategy, design, technology and marketing under one roof. Each service is connected to a measurable outcome — more discovery, more trust, and more appointments.</p>
          </Reveal>
          <div className="mt-20 grid grid-cols-2 border-l border-t border-black/10">
            {services.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.06}>
                <motion.article whileHover={reduceMotion ? undefined : { backgroundColor: "#f4f6ff" }} className="group min-h-[280px] border-b border-r border-black/10 p-10 transition-colors">
                  <div className="flex items-start justify-between">
                    <span className="text-[13px] font-bold text-teal">{number}</span>
                    <span className="text-[28px] text-black/20 transition-transform duration-300 group-hover:rotate-45 group-hover:text-navy">+</span>
                  </div>
                  <h3 className="mt-16 text-[30px] font-bold tracking-[-0.03em] text-navy">{title}</h3>
                  <p className="mt-4 max-w-[460px] text-[16px] leading-[1.6] text-black/50">{text}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="bg-[#f2f4ff] py-32">
          <div className="mx-auto max-w-[1440px] px-10 xl:px-16">
            <Reveal className="flex items-end justify-between">
              <div>
                <Eyebrow>Featured website</Eyebrow>
                <h2 className="max-w-[700px] text-[64px] font-bold leading-none tracking-[-0.05em] text-navy">Designed around the patient, not the template.</h2>
              </div>
              <p className="max-w-[350px] text-[16px] leading-[1.6] text-black/50">Every screen is planned to make essential information easier to find and appointments easier to book.</p>
            </Reveal>
            <Reveal className="mt-16" delay={0.1}>
              <motion.div whileHover={reduceMotion ? undefined : { scale: 1.004 }} transition={{ duration: 0.4 }} className="mx-auto max-w-[960px] overflow-hidden rounded-[36px] bg-white shadow-[0_30px_90px_rgba(67,82,152,.16)]">
                <Image src="/images/featured-website.jpg" alt="Full Mediland hospital website designed by Grow Medico" width={1080} height={1920} sizes="(min-width: 1280px) 960px, 82vw" className="h-auto w-full" />
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-[1440px] px-10 py-32 xl:px-16">
          <Reveal className="flex items-end justify-between">
            <div><Eyebrow>Our proven workflow</Eyebrow><h2 className="text-[60px] font-bold tracking-[-0.05em] text-navy">Clarity at every step.</h2></div>
            <p className="max-w-[430px] text-[17px] leading-[1.6] text-black/50">A transparent process that moves from business goals to reliable delivery — without the usual agency fog.</p>
          </Reveal>
          <ol className="mt-20 grid grid-cols-3 gap-x-12 gap-y-16">
            {workflow.map((item, index) => (
              <Reveal key={item} delay={(index % 3) * 0.08}>
                <li className="border-t border-black/15 pt-7">
                  <span className="font-arial-black text-[80px] leading-none text-transparent [-webkit-text-stroke:1px_#6b85e4]">{index + 1}</span>
                  <p className="mt-6 max-w-[260px] text-[20px] font-bold leading-snug text-navy">{item}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="bg-navy py-28 text-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1.05fr_.95fr] items-center gap-24 px-10 xl:px-16">
            <Reveal>
              <Eyebrow light>SEO that proves its value</Eyebrow>
              <h2 className="text-[58px] font-bold leading-[1.02] tracking-[-0.05em]">Search visibility that turns into real-world action.</h2>
              <div className="mt-12 grid grid-cols-3 gap-5">
                {results.map(([value, label]) => (
                  <div key={label} className="border-t border-white/20 pt-5">
                    <p className="text-[35px] font-bold text-[#c2ff1c]">{value}</p>
                    <p className="mt-2 text-[13px] text-white/55">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12"><ArrowLink href="#contact-desktop" light>Get a free audit</ArrowLink></div>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div whileHover={reduceMotion ? undefined : { rotate: 1, scale: 1.015 }} className="relative aspect-[1.3] overflow-hidden rounded-[32px] bg-white shadow-[20px_24px_0_rgba(4,169,179,.45)]">
                <Image src="/images/gbp-screenshot.png" alt="Google Business Profile results" fill sizes="560px" className="object-cover" />
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-10 py-32 xl:px-16">
          <div className="grid grid-cols-[.75fr_1.25fr] gap-24">
            <Reveal className="sticky top-36 self-start">
              <Eyebrow>How SEO works</Eyebrow>
              <h2 className="text-[56px] font-bold leading-[1.05] tracking-[-0.05em] text-navy">A system for compounding visibility.</h2>
              <p className="mt-7 text-[17px] leading-[1.65] text-black/50">No shortcuts or mystery metrics. We improve the experience, earn relevance and optimise based on real performance.</p>
            </Reveal>
            <ol>
              {seoSteps.map((step, index) => (
                <Reveal key={step}>
                  <li className="grid grid-cols-[90px_1fr] items-center border-b border-black/10 py-9">
                    <span className="text-[15px] font-bold text-teal">0{index + 1}</span>
                    <p className="text-[26px] font-medium leading-snug tracking-[-0.02em]">{step}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="overflow-hidden bg-black py-28 text-white">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-16 px-10 xl:px-16">
            <Reveal className="max-w-[930px]">
              <Eyebrow light>Measured growth since 2020</Eyebrow>
              <p className="text-[64px] font-medium leading-[1.08] tracking-[-0.045em]">We’ve helped <strong className="text-[#c2ff1c]">45+ hospitals & clinics</strong> across India achieve up to <strong className="text-teal">2X growth.</strong></p>
            </Reveal>
            <motion.span aria-hidden className="shrink-0 text-[220px] font-light leading-none text-white/10" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>+</motion.span>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-10 py-32 xl:px-16">
          <Reveal className="mb-14 flex items-end justify-between">
            <div><Eyebrow>Healthcare partners</Eyebrow><h2 className="text-[56px] font-bold tracking-[-0.05em] text-navy">Built on long-term trust.</h2></div>
            <p className="max-w-[430px] text-[17px] leading-[1.6] text-black/50">We become an extension of the teams we support — combining clinical sensitivity with commercial focus.</p>
          </Reveal>
          <div className="grid grid-cols-12 gap-6">
            <Reveal className="col-span-7">
              <motion.article whileHover={reduceMotion ? undefined : { y: -6 }} className="relative h-[470px] overflow-hidden rounded-[32px]">
                <Image src="/images/life-save-hospital.png" alt="Life Save Hospital, Bijoy Nagar Guwahati" fill sizes="760px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-9 left-10 text-white"><p className="text-[31px] font-bold">Life Save Hospital</p><p className="mt-1 text-white/65">Bijoy Nagar, Guwahati</p></div>
              </motion.article>
            </Reveal>
            <Reveal className="col-span-5" delay={0.1}>
              <motion.article whileHover={reduceMotion ? undefined : { y: -6 }} className="relative h-[470px] overflow-hidden rounded-[32px] bg-[#eef1ff]">
                <Image src="/images/doctor-kinnor-das.png" alt="Dr. Kinnor Das, Dermatologist" fill sizes="520px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-9 left-10 text-white"><p className="text-[31px] font-bold">Dr. Kinnor Das</p><p className="mt-1 text-white/65">Dermatologist</p></div>
              </motion.article>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#f7f7f7] py-32">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-20 px-10 xl:px-16">
            <Reveal>
              <Eyebrow>Recent delivery</Eyebrow>
              <h2 className="text-[52px] font-bold leading-[1.05] tracking-[-0.045em] text-steel">Designed carefully, delivered completely.</h2>
              <p className="mt-7 max-w-[560px] text-[17px] leading-[1.7] text-black/50">We design every section around patient experience, clear information and a fast, low-friction path to enquiry.</p>
              <div className="relative mt-10 aspect-[1.45] overflow-hidden rounded-[28px]">
                <Image src="/images/recent-delivery.png" alt="Recent Grow Medico website delivery" fill sizes="620px" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[34px] bg-periwinkle p-12 text-white">
                <Eyebrow light>Case study</Eyebrow>
                <div className="relative aspect-[1.6] overflow-hidden rounded-[22px]"><Image src="/images/jjims-hospital.png" alt="JJIMS Hospital" fill sizes="580px" className="object-cover" /></div>
                <h3 className="mt-9 text-[35px] font-bold leading-tight">360° marketing and end-to-end management</h3>
                <ul className="mt-7 space-y-4 text-[15px] text-white/75">
                  <li>01 — Brand strategy and positioning</li><li>02 — Website experience and content</li><li>03 — Search, reputation and lead systems</li>
                </ul>
                <div className="mt-9"><ArrowLink href="#contact-desktop" light>Request the report</ArrowLink></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about-desktop" className="bg-black py-32 text-white">
          <div className="mx-auto max-w-[1440px] px-10 xl:px-16">
            <Reveal className="grid grid-cols-[.8fr_1.2fr] gap-24">
              <div><Eyebrow light>About Yantra Media</Eyebrow><h2 className="text-[58px] font-bold leading-[1.04] tracking-[-0.05em]">Creativity and technology, working as one.</h2></div>
              <div>
                <p className="text-[24px] leading-[1.6] text-white/65">Yantra Media is a creative and technology-driven agency delivering branding, digital marketing, UI/UX, web development, performance marketing and technology solutions.</p>
                <div className="mt-10 flex items-center gap-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full"><Image src="/images/founder.png" alt="Saptarshi Purkayastha" fill sizes="96px" className="object-cover" /></div>
                  <div><p className="text-[21px] font-bold">Saptarshi Purkayastha</p><p className="mt-1 text-[13px] text-white/45">Founder & CEO</p></div>
                </div>
              </div>
            </Reveal>
            <Reveal className="relative mt-20 aspect-[2.65] overflow-hidden rounded-[32px]" delay={0.08}>
              <Image src="/images/about-banner.png" alt="Yantra Media work showcase" fill sizes="1280px" className="object-cover" />
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-10 py-28 xl:px-16">
          <div className="grid grid-cols-[.72fr_1.28fr] items-center gap-20">
            <Reveal>
              <p className="text-[13px] font-bold uppercase tracking-[0.55em] text-gold">Celebrating</p>
              <div className="relative mt-5 h-[190px] w-[280px]"><Image src="/images/six-years-logo.png" alt="Yantra Media — 6 years" fill sizes="280px" className="object-contain" /></div>
              <p className="mt-3 max-w-[390px] text-[17px] leading-[1.6] text-gold">Six years of empowering growth through technology, creativity and innovation.</p>
            </Reveal>
            <div className="grid grid-cols-3 gap-5">
              {["award-1.png", "award-2.png", "award-3.png"].map((award, index) => (
                <Reveal key={award} delay={index * 0.08}><motion.div whileHover={reduceMotion ? undefined : { y: -10, rotate: index - 1 }} className="relative h-[310px] overflow-hidden rounded-[24px] bg-[#f5f3ed]"><Image src={`/images/${award}`} alt="Yantra Media award and recognition" fill sizes="300px" className="object-cover" /></motion.div></Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-24 grid grid-cols-[1.25fr_.75fr] items-center overflow-hidden rounded-[34px] bg-[#f3f4f7]">
            <div className="relative h-[370px]"><Image src="/images/team-yantra.png" alt="Team Yantra Media" fill sizes="780px" className="object-cover" /></div>
            <div className="p-12"><p className="text-[12px] font-bold uppercase tracking-[0.22em] text-black/35">The team behind the work</p><h3 className="mt-5 text-[42px] font-bold leading-tight text-navy">25+ industry professionals. One connected team.</h3><div className="mt-8"><ArrowLink href="#contact-desktop">Work with us</ArrowLink></div></div>
          </Reveal>
        </section>
      </main>

      <footer id="contact-desktop" className="relative isolate overflow-hidden bg-forest py-24 text-white">
        <Image src="/images/footer-bg.png" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-20 mix-blend-overlay" />
        <div className="mx-auto max-w-[1440px] px-10 xl:px-16">
          <Reveal className="flex items-end justify-between border-b border-white/15 pb-20">
            <h2 className="max-w-[820px] text-[72px] font-bold leading-[1.02] tracking-[-0.055em]">Ready to grow your healthcare brand?</h2>
            <ArrowLink href="mailto:hello@yantramedia.com" light>Let’s talk</ArrowLink>
          </Reveal>
          <div className="grid grid-cols-4 gap-12 pt-16 text-[14px] leading-[1.8] text-white/60">
            <div><p className="font-bold text-white">Grow Medico</p><p className="mt-4">Digital growth for hospitals, clinics and doctors.</p></div>
            <div><p className="font-bold text-white">Gurgaon</p><address className="mt-4 not-italic">C-17, Devender Vihar<br />Near HongKong Market, Sec-56<br />Gurugram, Haryana 122011</address></div>
            <div><p className="font-bold text-white">Noida</p><address className="mt-4 not-italic">771, Gaur City Mall<br />Greater Noida West<br />Uttar Pradesh 201318</address></div>
            <div><p className="font-bold text-white">Explore</p><div className="mt-4 flex flex-col"><Link href="#services">Services</Link><Link href="#work">Work</Link><Link href="#process">Process</Link><Link href="#about-desktop">About</Link></div></div>
          </div>
          <p className="mt-20 text-[12px] text-white/35">© 2026 Yantra Media Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
