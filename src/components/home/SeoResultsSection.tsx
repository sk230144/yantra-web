import Image from "next/image";
import { SoftButton } from "@/components/ui/SoftButton";

const RESULTS = [
  { label: "6,342 + Calls", gap: 22 },
  { label: "683 + Website Enquiries", gap: 14 },
  { label: "2,532 + Directions", gap: 16 },
];

export function SeoResultsSection() {
  return (
    <section className="h-[786px] pt-[51px]">
      <h2 className="ml-[calc(50%-159px)] w-[305px] text-center text-[25px] leading-[35px] text-steel">
        How Strategic SEO Drives Sales &amp; Generates More Google Calls
      </h2>

      <div className="relative ml-[calc(50%-165px)] mt-[33px] h-[212px] w-[326px] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.18)]">
        <Image
          src="/images/gbp-screenshot.png"
          alt="Google Business Profile performance dashboard"
          fill
          sizes="326px"
          className="object-cover"
        />
        <Image
          src="/images/play-button.svg"
          alt=""
          width={87.1186}
          height={90.9464}
          className="absolute left-[113.24px] top-[68.78px]"
        />
      </div>

      <p className="ml-[51px] mt-[50px] whitespace-pre text-[25px] font-bold leading-[normal] text-[#5378b0]">
        {"Results Generated Over\nthe Last 3 Months through\nSEO/GEO/AEO"}
      </p>

      <ul className="ml-[51px] text-[25px] font-bold leading-[normal] text-[#358c45]">
        {RESULTS.map((result) => (
          <li key={result.label} style={{ marginTop: result.gap }}>
            {result.label}
          </li>
        ))}
      </ul>

      <SoftButton href="#contact" className="ml-[calc(50%-95px)] mt-[31px] h-[47px] w-[183px] pl-[33px] pt-[15px]">
        Get a Free Audit &gt;
      </SoftButton>
    </section>
  );
}
