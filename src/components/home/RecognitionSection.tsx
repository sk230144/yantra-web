import Image from "next/image";
import { CroppedImage, type Crop } from "@/components/ui/CroppedImage";
import { TrustStats } from "@/components/home/TrustStats";

type Award = { src: string; alt: string; left: string; top: number; width: number; height: number; radius: number; crop?: Crop };

const AWARDS: Award[] = [
  {
    src: "/images/award-1.png",
    alt: "Saptarshi Purkayastha receiving an Indian Awards trophy",
    left: "calc(50% - 170px)",
    top: 407,
    width: 173,
    height: 165,
    radius: 13,
    crop: { left: "-0.08%", top: 0, width: "100.16%", height: "157.38%" },
  },
  {
    src: "/images/award-2.png",
    alt: "Yantra Media receiving a recognition",
    left: "calc(50% + 23px)",
    top: 491,
    width: 155,
    height: 158,
    radius: 13,
    crop: { left: "-43.72%", top: "0.17%", width: "187.73%", height: "147.42%" },
  },
  {
    src: "/images/award-3.png",
    alt: "Tech Digital Marketing Awards certificate",
    left: "calc(50% - 172px)",
    top: 587,
    width: 175,
    height: 152,
    radius: 14,
  },
];

export function RecognitionSection() {
  return (
    <section className="relative h-[1045px] font-display">
      <p className="absolute left-[calc(50%-131px)] top-[69px] w-[334px] text-[18px] font-bold leading-[normal] tracking-[14.4px] text-gold">
        CELEBRATING
      </p>
      <Image
        src="/images/six-years-logo.png"
        alt="Yantramedia celebrating 6 years, 2020-26"
        width={196}
        height={136}
        className="absolute left-[calc(50%-98px)] top-[102px] h-[136px] w-[196px] object-cover"
      />
      <p className="absolute left-[calc(50%-153px)] top-[247px] w-[306px] text-center text-[15px] font-medium leading-[normal] text-gold">
        6 Years of Yantra Media — Empowering Growth Through Technology, Creativity &amp; Innovation.
      </p>

      <h2 className="absolute left-[calc(50%-143px)] top-[350px] whitespace-nowrap text-[30px] leading-[normal] text-mist">
        Awords &amp; Recognitions
      </h2>
      {AWARDS.map((award) => (
        <CroppedImage
          key={award.src}
          src={award.src}
          alt={award.alt}
          sizes={`${Math.ceil(award.width * 1.9)}px`}
          crop={award.crop}
          className="absolute"
          style={{ left: award.left, top: award.top, width: award.width, height: award.height, borderRadius: award.radius }}
        />
      ))}

      <h2 className="absolute left-[calc(50%-173px)] top-[772px] whitespace-nowrap text-[30px] leading-[normal] text-mist">
        Why Should you Trust Us!
      </h2>
      <TrustStats />
    </section>
  );
}
