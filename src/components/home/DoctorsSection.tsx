import Image from "next/image";

type Doctor = {
  image: string;
  name: string;
  specialty: string;
  /** Card size and corner radius from the mobile frame; later cards follow the first. */
  width?: number;
  radius?: number;
};

// Names and specialties as written in the Figma doctors strip.
const DOCTORS: Doctor[] = [
  { image: "/images/doctor-kinnor-das.png", name: "Dr. Kinnor Das", specialty: "Dermatologist" },
  {
    image: "/images/doctor-nupur-dabbas.png",
    name: "Dr. Nupur Dabbas",
    specialty: "Ophthamologist",
    width: 244,
    radius: 24,
  },
  { image: "/images/doctor-raj-kumar.png", name: "Dr. Raj Kumar", specialty: "NeuroSurgeon" },
  { image: "/images/doctor-sambuddha-dhar.png", name: "Dr. Sambuddha Dhar", specialty: "NeuroSurgeon" },
  { image: "/images/doctor-priyanka-deb.png", name: "Dr. Priyanka Deb", specialty: "Paediatrician" },
  { image: "/images/doctor-ratnadip-bose.png", name: "Dr. Ratnadip Bose", specialty: "Neurologist" },
  { image: "/images/doctor-angshuman-nag.png", name: "Dr. Angshuman Nag", specialty: "BDS, Dentist" },
];

export function DoctorsSection() {
  return (
    <section className="h-[871px] pt-[44px]">
      <p className="ml-[46px] w-[282px] text-[25px] leading-[30px]">
        A few of the doctors <br />
        we partner with for their marketing and digital presence.
      </p>

      <ul className="mt-[43px] flex snap-x snap-mandatory scroll-pl-[25px] items-start gap-[21px] overflow-x-auto pl-[25px] pr-[16px] scrollbar-none">
        {DOCTORS.map(({ image, name, specialty, width = 243, radius = 29 }) => (
          <li key={image} className="shrink-0 snap-start text-center" style={{ width }}>
            <div className="relative h-[369px] overflow-hidden" style={{ borderRadius: radius }}>
              <Image src={image} alt={`${name}, ${specialty}`} fill sizes={`${width}px`} className="object-cover" />
            </div>
            <p className="mt-[16px] whitespace-nowrap text-[25px] leading-[normal]">{name}</p>
            <p className="mt-[16px] whitespace-nowrap text-[15px] leading-[normal] text-[#7e7e7e]">{specialty}</p>
          </li>
        ))}
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
