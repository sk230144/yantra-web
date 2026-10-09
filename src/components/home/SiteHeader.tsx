import Link from "next/link";
import { CroppedImage } from "@/components/ui/CroppedImage";

export function SiteHeader() {
  return (
    <header className="relative z-10 flex h-[73px] items-start justify-between pl-[15px] pr-[26px] pt-[22px]">
      <Link href="/" aria-label="Grow Medico home" className="block">
        <CroppedImage
          src="/images/grow-medico-logo.png"
          alt="Grow Medico by Yantra"
          sizes="132px"
          priority
          className="relative h-[51px] w-[116px]"
          crop={{ left: "-6.61%", top: "-21.8%", width: "113.22%", height: "145.48%" }}
        />
      </Link>

      <button
        type="button"
        aria-label="Open menu"
        className="mt-[8px] flex w-[28px] flex-col gap-[4px]"
      >
        <span className="h-[6px] rounded-[5px] bg-[#d9d9d9]" />
        <span className="h-[5px] rounded-[5px] bg-[#d9d9d9]" />
        <span className="h-[6px] rounded-[5px] bg-[#d9d9d9]" />
      </button>
    </header>
  );
}
