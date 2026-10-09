import { CroppedImage } from "@/components/ui/CroppedImage";

const OTHER_SERVICES = [
  "Brand Identity",
  "Social Media Marketing",
  "Website Design and Development",
  "Video Production",
  "Visual Designing",
  "2D and 3D Animation",
  "Mobile Apps",
  "Digital Marketing",
];

const OFFICES = [
  {
    city: "Gurgaon",
    cityTop: 510,
    addressTop: 535,
    width: 259,
    lines: ["Corporate  Office:", "C-17, Devender Vihar, Near HongKong Market Sec-56,Gurugram", "Haryana 122011"],
  },
  {
    city: "Noida",
    cityTop: 643,
    addressTop: 668,
    width: 265,
    lines: ["Founders Office:", "771, Gaur City Mall, Greater Noida West, ", "Uttar Pradesh,", "Pin- 201318"],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative isolate h-[832px] overflow-hidden bg-forest font-display text-white">
      <CroppedImage
        src="/images/footer-bg.png"
        alt=""
        sizes="1963px"
        className="absolute left-[calc(50%-999.23px)] top-[-103.44px] h-[1121.11px] w-[1962.47px] opacity-50 mix-blend-overlay"
        crop={{ left: "-0.02%", top: 0, width: "100.01%", height: "111.56%" }}
      />

      <h2 className="absolute left-[32px] top-[48px] text-[20px] font-bold leading-[normal]">Other Services</h2>
      <ul className="absolute left-[32px] top-[85px] whitespace-nowrap text-[15px] leading-[38px]">
        {OTHER_SERVICES.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>

      <h2 className="absolute left-[37px] top-[458px] whitespace-nowrap text-[20px] font-bold leading-[normal]">
        Join us for a Coffee!
      </h2>
      {OFFICES.map((office) => (
        <div key={office.city}>
          <h3
            className="absolute left-[37px] whitespace-nowrap text-[20px] font-bold leading-[normal]"
            style={{ top: office.cityTop }}
          >
            {office.city}
          </h3>
          <address
            className="absolute left-[37px] whitespace-pre-wrap text-[15px] not-italic leading-[1.5]"
            style={{ top: office.addressTop, width: office.width }}
          >
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      ))}

      <p className="absolute left-[calc(50%-184px)] top-[783px] whitespace-pre text-[13px] leading-[normal]">
        {"©  All Rights Reserved to Yantra Media Company_2026."}
      </p>
    </footer>
  );
}
