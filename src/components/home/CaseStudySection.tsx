import Image from "next/image";
import { CroppedImage } from "@/components/ui/CroppedImage";
import { SoftButton } from "@/components/ui/SoftButton";

type ReportPoint = { number: number; numberLeft: number; numberTop: number; textLeft: number; textTop: number; text: string };

const REPORT_POINTS: ReportPoint[] = [
  { number: 1, numberLeft: 40, numberTop: 413, textLeft: 84, textTop: 426, text: "How we have done the overall branding" },
  { number: 2, numberLeft: 42, numberTop: 488, textLeft: 87, textTop: 501, text: "Strategy and Report about 2x Brand Presence" },
  { number: 3, numberLeft: 40, numberTop: 563, textLeft: 87, textTop: 576, text: "Strategy and Report about 2x Brand Presence" },
  { number: 4, numberLeft: 39, numberTop: 642, textLeft: 86, textTop: 655, text: "Strategy and Report about 2x Brand Presence" },
  { number: 5, numberLeft: 40, numberTop: 724, textLeft: 87, textTop: 736, text: "Strategy and Report about 2x Brand Presence" },
];

export function CaseStudySection() {
  return (
    <section id="mobile-case-study" className="relative h-[908px] bg-periwinkle text-white">
      <Image src="/images/bullet-dot.svg" alt="" width={6} height={6} className="absolute left-[38px] top-[43px]" />
      <p className="absolute left-[48px] top-[37px] text-[15px] font-bold leading-[1.1]">CaseStudy</p>

      <CroppedImage
        src="/images/jjims-hospital.png"
        alt="JJIMS Hospital"
        sizes="656px"
        className="absolute left-[calc(50%-170px)] top-[80px] h-[233px] w-[349px] rounded-[18px]"
        crop={{ left: "-68.21%", top: 0, width: "187.7%", height: "100%" }}
      />

      <h2 className="absolute left-[calc(50%-158px)] top-[338px] w-[302px] text-center text-[25px] leading-[1.1]">
        360 Marketing Report and over all management
      </h2>

      <ol>
        {REPORT_POINTS.map((point) => (
          <li key={point.number}>
            <span
              className="absolute text-[50px] leading-[normal]"
              style={{ left: point.numberLeft, top: point.numberTop }}
            >
              {point.number}
            </span>
            <p
              className="absolute w-[251px] text-[15px] leading-[normal]"
              style={{ left: point.textLeft, top: point.textTop }}
            >
              {point.text}
            </p>
          </li>
        ))}
      </ol>

      <SoftButton
        href="#contact"
        className="absolute left-[calc(50%-132px)] top-[816px] h-[54px] w-[247px] pl-[65px] pt-[18px]"
      >
        Download Report
      </SoftButton>
    </section>
  );
}
