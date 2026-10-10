"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { CroppedImage } from "@/components/ui/CroppedImage";

// Anchors point at the mobile sections (ids are prefixed so they don't clash with the tablet/desktop trees).
const NAV_LINKS = [
  { label: "Our Services", href: "#mobile-services" },
  { label: "Our Work", href: "#mobile-work" },
  { label: "Our Workflow", href: "#mobile-process" },
  { label: "Hospitals & Doctors", href: "#mobile-hospitals" },
  { label: "Case Study", href: "#mobile-case-study" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function HeaderLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" aria-label="Grow Medico home" className="block" onClick={onClick}>
      <CroppedImage
        src="/images/grow-medico-logo.png"
        alt="Grow Medico by Yantra"
        sizes="132px"
        priority
        className="relative h-[51px] w-[116px]"
        crop={{ left: "-6.61%", top: "-21.8%", width: "113.22%", height: "145.48%" }}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus({ preventScroll: true });
  };

  // Close first so the page can scroll again, then jump to the section.
  const goTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    close(false);
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  };

  return (
    <header className="relative z-50 flex h-[73px] items-start justify-between pl-[15px] pr-[26px] pt-[22px]">
      <HeaderLogo />

      <button
        ref={menuButtonRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="-m-[10px] mt-[-2px] p-[10px]"
      >
        <span className="flex w-[28px] flex-col gap-[4px]">
          <span className="h-[6px] rounded-[5px] bg-[#d9d9d9]" />
          <span className="h-[5px] rounded-[5px] bg-[#d9d9d9]" />
          <span className="h-[6px] rounded-[5px] bg-[#d9d9d9]" />
        </span>
      </button>

      {/* Opening shows the panel instantly (so focus can move into it); closing keeps it visible until the fade ends. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 flex flex-col overflow-y-auto bg-white duration-300 motion-reduce:transition-none ${
          open ? "visible opacity-100 transition-opacity" : "invisible opacity-0 transition-[opacity,visibility]"
        }`}
      >
        <div className="flex h-[73px] shrink-0 items-start justify-between pl-[15px] pr-[26px] pt-[22px]">
          <HeaderLogo onClick={() => close(false)} />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={() => close()}
            className="-m-[10px] mt-[-2px] p-[10px]"
          >
            <span className="relative block h-[25px] w-[28px]">
              <span className="absolute left-1/2 top-1/2 h-[5px] w-[34px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[5px] bg-navy" />
              <span className="absolute left-1/2 top-1/2 h-[5px] w-[34px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[5px] bg-navy" />
            </span>
          </button>
        </div>

        <nav aria-label="Main navigation" className="px-[32px] pt-[28px]">
          <ol>
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`border-b border-divider transition-[opacity,translate] duration-500 motion-reduce:transition-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-[12px] opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={(event) => goTo(event, link.href)}
                  className="flex items-baseline gap-[16px] py-[16px] text-navy active:text-teal"
                >
                  <span className="w-[22px] text-[13px] font-bold text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[25px] leading-[normal]">{link.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-auto px-[32px] pb-[36px] pt-[32px]">
          <a
            href="#contact"
            onClick={(event) => goTo(event, "#contact")}
            className="flex h-[54px] items-center justify-center rounded-[13px] bg-black font-display text-[15px] font-semibold text-white"
          >
            Get a Free Audit &gt;
          </a>
          <div className="mt-[24px] flex items-start justify-center gap-[9px]">
            <CroppedImage
              src="/images/ym-logo-icon.png"
              alt=""
              sizes="57px"
              className="relative h-[31px] w-[32px] shrink-0"
              crop={{ left: "-38.04%", top: "-39.27%", width: "175.69%", height: "156.28%" }}
            />
            <p className="mt-px whitespace-nowrap text-[15px] leading-[normal] text-navy">A Yantra Media Company</p>
          </div>
        </div>
      </div>
    </header>
  );
}
