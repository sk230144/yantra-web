import Image from "next/image";
import { DOCTORS } from "@/content/home";

// Card size and corner radius from the mobile frame; cards not listed follow the first card (243px, radius 29).
const CARD_OVERRIDES: Record<string, { width: number; radius: number }> = {
  "/images/doctor-nupur-dabbas.png": { width: 244, radius: 24 },
};

export function DoctorsSection() {
  return (
    <section className="h-[871px] pt-[44px]">
      <p className="ml-[46px] w-[282px] text-[25px] leading-[30px]">
        A few of the doctors <br />
        we partner with for their marketing and digital presence.
      </p>

      <ul className="mt-[43px] flex snap-x snap-mandatory scroll-pl-[25px] items-start gap-[21px] overflow-x-auto pl-[25px] pr-[16px] scrollbar-none">
        {DOCTORS.map(({ image, name, specialty }) => {
          const { width, radius } = CARD_OVERRIDES[image] ?? { width: 243, radius: 29 };
          return (
          <li key={image} className="shrink-0 snap-start text-center" style={{ width }}>
            <div className="relative h-[369px] overflow-hidden" style={{ borderRadius: radius }}>
              <Image src={image} alt={`${name}, ${specialty}`} fill sizes={`${width}px`} className="object-cover" />
            </div>
            <p className="mt-[16px] whitespace-nowrap text-[25px] leading-[normal]">{name}</p>
            <p className="mt-[16px] whitespace-nowrap text-[15px] leading-[normal] text-[#7e7e7e]">{specialty}</p>
          </li>
          );
        })}
      </ul>

      <div className="-ml-[16px] mt-[44px] h-[173px] w-[346px] rounded-[13px] bg-steel pl-[51px] pt-[36px]">
        <p className="w-[250px] text-[15px] italic leading-[normal] text-white">
          We work for Doctor’s Profile
          <br />
          Reputation Management and Boost Organic Lead Acquisition from Google &amp; WebsiteWe Build Doctors’ Digital
          Reputation &amp; Drive Organic Leads through Google and Websites.
        </p>
      </div>
    </section>
  );
}
