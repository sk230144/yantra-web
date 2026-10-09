import { CroppedImage, type Crop } from "@/components/ui/CroppedImage";

type Hospital = {
  name: string;
  location: string;
  image: string;
  /** Photo placement inside the 233×141 card window, taken from Figma. */
  crop: Crop;
};

// Figma's default fill: a 241×175 image box starting 7px above the card window.
const DEFAULT_CROP: Crop = { left: 0, top: "-7px", width: "241px", height: "175px" };

// Names and locations as written in Figma.
const HOSPITALS: Hospital[] = [
  {
    name: "Life Save Hospital,",
    location: "Bijoy Nagar Guwahati",
    image: "/images/life-save-hospital.png",
    crop: { left: "-6.56px", top: "-0.56px", width: "241.19px", height: "175px" },
  },
  {
    name: "JJIMS Hospital,",
    location: "Meherpur Silchar",
    image: "/images/jjims-hospital.png",
    crop: { left: "-168px", top: 0, width: "455.5px", height: "162px" },
  },
  {
    name: "Desun Hospital,",
    location: "Kosba Kolkatta",
    image: "/images/hospital-desun.png",
    crop: { left: 0, top: "-9.35px", width: "241px", height: "179.69px" },
  },
  { name: "SNSS Hospital,", location: "Park Road Silchar", image: "/images/hospital-snss.png", crop: DEFAULT_CROP },
  {
    name: "Mediland Hospital,",
    location: "Itkhola Silchar",
    image: "/images/hospital-mediland.png",
    crop: DEFAULT_CROP,
  },
];

export function HospitalsSection() {
  return (
    <section className="h-[394px] bg-navy pt-[24px]">
      <h2 className="ml-[49px] w-[282px] text-[20px] font-bold leading-[normal] text-white">
        Few of the hospitals we are associated with
      </h2>

      <ul className="mt-[31px] flex snap-x snap-mandatory scroll-pl-[47px] gap-[16px] overflow-x-auto pb-[8px] pl-[47px] pr-[16px] scrollbar-none">
        {HOSPITALS.map((hospital) => (
          <li
            key={hospital.name}
            className="relative h-[216px] w-[233px] shrink-0 snap-start rounded-[15px] bg-white shadow-soft"
          >
            <CroppedImage
              src={hospital.image}
              alt={`${hospital.name} ${hospital.location}`}
              sizes={`${Math.ceil(parseFloat(String(hospital.crop.width)))}px`}
              className="relative h-[141px] w-[233px] [mask-image:url(/images/hospital-card-mask.svg)] [mask-repeat:no-repeat] [mask-size:233px_141px]"
              crop={hospital.crop}
            />
            <p className="absolute left-[20px] top-[154px] whitespace-nowrap text-[#575757]">
              <span className="block text-[20px] leading-[25px]">{hospital.name}</span>
              <span className="block text-[12px] leading-[25px]">{hospital.location}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
