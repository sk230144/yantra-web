import { CroppedImage, type Crop } from "@/components/ui/CroppedImage";
import { HOSPITALS } from "@/content/home";

// Figma's default fill: a 241×175 image box starting 7px above the 233×141 card window.
const DEFAULT_CROP: Crop = { left: 0, top: "-7px", width: "241px", height: "175px" };

// Photo placement per image, taken from Figma; images not listed use DEFAULT_CROP.
const CROPS: Record<string, Crop> = {
  "/images/life-save-hospital.png": { left: "-6.56px", top: "-0.56px", width: "241.19px", height: "175px" },
  "/images/jjims-hospital.png": { left: "-168px", top: 0, width: "455.5px", height: "162px" },
  "/images/hospital-desun.png": { left: 0, top: "-9.35px", width: "241px", height: "179.69px" },
};

export function HospitalsSection() {
  return (
    <section id="mobile-hospitals" className="h-[394px] bg-navy pt-[24px]">
      <h2 className="ml-[49px] w-[282px] text-[20px] font-bold leading-[normal] text-white">
        Few of the hospitals we are associated with
      </h2>

      <ul className="mt-[31px] flex snap-x snap-mandatory scroll-pl-[47px] gap-[16px] overflow-x-auto pb-[8px] pl-[47px] pr-[16px] scrollbar-none">
        {HOSPITALS.map((hospital) => {
          const crop = CROPS[hospital.image] ?? DEFAULT_CROP;
          return (
          <li
            key={hospital.name}
            className="relative h-[216px] w-[233px] shrink-0 snap-start rounded-[15px] bg-white shadow-soft"
          >
            <CroppedImage
              src={hospital.image}
              alt={`${hospital.name} ${hospital.location}`}
              sizes={`${Math.ceil(parseFloat(String(crop.width)))}px`}
              className="relative h-[141px] w-[233px] [mask-image:url(/images/hospital-card-mask.svg)] [mask-repeat:no-repeat] [mask-size:233px_141px]"
              crop={crop}
            />
            <p className="absolute left-[20px] top-[154px] whitespace-nowrap text-[#575757]">
              <span className="block text-[20px] leading-[25px]">{hospital.name},</span>
              <span className="block text-[12px] leading-[25px]">{hospital.location}</span>
            </p>
          </li>
          );
        })}
      </ul>
    </section>
  );
}
