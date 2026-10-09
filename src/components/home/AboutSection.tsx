import Image from "next/image";
import { CroppedImage } from "@/components/ui/CroppedImage";

const FOUNDER = {
  name: "Saptarshi Purkayastha",
  role: "Founder & CEO",
  linkedinUrl: "#",
};

export function AboutSection() {
  return (
    <section id="about" className="h-[727px] bg-black pt-[46px] font-display">
      <h2 className="ml-[calc(50%-61px)] text-[25px] leading-[normal] text-white">About Us</h2>
      <p className="ml-[calc(50%-169px)] mt-[21px] w-[338px] text-center text-[15px] font-medium leading-[normal] text-mist">
        Yantra Media is a creative and technology driven agency delivering innovative solutions in branding, digital
        marketing, UI/UX, web development, performance marketing, and technology.
      </p>

      <div className="relative ml-[calc(50%-179px)] mt-[68px] h-[202.981px] w-[358.346px]">
        <Image
          src="/images/about-banner.png"
          alt="Yantra Media social media content showcase"
          fill
          sizes="359px"
          className="object-cover"
        />
      </div>

      <div className="relative ml-[calc(50%-169px)] mt-[81px] h-[113px] w-[333px] text-white">
        <CroppedImage
          src="/images/founder.png"
          alt={FOUNDER.name}
          sizes="130px"
          className="relative h-[113px] w-[112.298px] [mask-image:url(/images/founder-mask.svg)] [mask-repeat:no-repeat] [mask-size:112.298px_113px]"
          crop={{ left: "-14.739px", top: "-16.143px", width: "129.143px", height: "129.143px" }}
        />
        <p className="absolute left-[134px] top-[5px] w-[199px] text-[20px] font-light leading-[normal]">{FOUNDER.name}</p>
        <p className="absolute left-[135px] top-[35px] w-[112px] text-[12px] font-bold leading-[normal]">{FOUNDER.role}</p>
        <a
          href={FOUNDER.linkedinUrl}
          aria-label={`${FOUNDER.name} on LinkedIn`}
          className="absolute left-[134px] top-[67px] h-[40px] w-[169px] rounded-[2px] border border-[#b5b5b5] bg-white"
        >
          <CroppedImage
            src="/images/linkedin.png"
            alt=""
            sizes="63px"
            className="absolute left-[49px] top-[8px] h-[21px] w-[63px]"
            crop={{ left: 0, top: "-100%", width: "100%", height: "300%" }}
          />
        </a>
      </div>
    </section>
  );
}
