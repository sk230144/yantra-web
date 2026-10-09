import { CroppedImage } from "@/components/ui/CroppedImage";

export function HeroSection() {
  return (
    <section className="relative h-[779px] pt-[226px]">
      {/* Decorative crosses */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%-254px)] top-[29px] h-[670px] w-[184px] select-none text-center font-display text-[200px] font-bold leading-[normal] text-transparent [-webkit-text-stroke:1px_var(--color-navy)]"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute left-[calc(50%+51px)] top-[213px] h-[670px] w-[184px] select-none text-center font-display text-[400px] font-black leading-[normal] text-navy/10"
      >
        +
      </span>

      <h1 className="relative translate-x-[8px] text-center text-[50px] font-bold leading-[50px]">
        <span className="block text-navy">We are&nbsp;</span>
        <span className="block text-teal">Grow Medico</span>
      </h1>

      <p className="relative ml-[calc(50%-122px)] mt-[10px] whitespace-nowrap text-[15px] leading-[normal] text-[#ababab]">
        Designed for Hospitals, Clinics &amp; Doctors
      </p>

      <div className="relative ml-[calc(50%-100px)] mt-[256px] flex items-start gap-[9px]">
        <CroppedImage
          src="/images/ym-logo-icon.png"
          alt=""
          sizes="57px"
          className="relative h-[31px] w-[32px] shrink-0"
          crop={{ left: "-38.04%", top: "-39.27%", width: "175.69%", height: "156.28%" }}
        />
        <p className="mt-px whitespace-nowrap text-[15px] leading-[normal] text-navy">
          A Yantra Media Company
        </p>
      </div>
    </section>
  );
}
