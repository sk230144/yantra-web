import Image from "next/image";

function CarouselArrow({ direction, dimmed }: { direction: "prev" | "next"; dimmed?: boolean }) {
  const fade = dimmed ? "opacity-40" : "";
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous work" : "Next work"}
      className={`absolute h-[60px] w-[64px] ${direction === "prev" ? "-scale-x-100" : ""}`}
    >
      <span className={`absolute inset-0 rounded-[23px] border border-black/20 shadow-soft ${fade}`} />
      <span
        aria-hidden
        className={`absolute left-[17px] top-[-3px] font-display text-[50px] font-light leading-[normal] text-[#939393] ${fade}`}
      >
        &gt;
      </span>
    </button>
  );
}

export function FeaturedWorksSection() {
  return (
    <section id="mobile-work" className="h-[856px] pt-[33px]">
      {/* Title sits above the mockup, whose white background overlaps it by 51px. */}
      <h2 className="relative z-10 -translate-x-[4.5px] text-center font-display text-[30px] leading-[40px] text-[#9aaebc]">
        Few of our featured&nbsp;
        <br />
        website works
      </h2>

      <div className="relative -mt-[51px] ml-[calc(50%-181px)] h-[633px] w-[356px]">
        <Image
          src="/images/featured-website.jpg"
          alt="Mediland hospital website designed by Grow Medico"
          fill
          sizes="356px"
          className="object-cover"
        />
      </div>

      <div className="relative mt-[38px] h-[70px]">
        <div className="absolute left-[calc(50%-181px)] top-[7px]">
          <CarouselArrow direction="prev" dimmed />
        </div>
        <Image
          src="/images/carousel-dots.svg"
          alt=""
          width={164}
          height={12}
          className="absolute left-[calc(50%-86px)] top-[27px]"
        />
        <div className="absolute left-[calc(50%+109px)] top-[3px]">
          <CarouselArrow direction="next" />
        </div>
      </div>

      <div className="mt-[52px] h-px w-[381px] bg-divider" />
    </section>
  );
}
