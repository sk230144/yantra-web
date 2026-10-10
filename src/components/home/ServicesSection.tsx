type Service = {
  number: number;
  numberLeft: number;
  numberTop: number;
  textTop: number;
  lines: string[];
};

// Offsets are relative to the top of the coloured band block.
const SERVICES: Service[] = [
  { number: 1, numberLeft: 78, numberTop: 37, textTop: 27, lines: ["Website Development  &", "Mantainance"] },
  { number: 2, numberLeft: 79, numberTop: 125, textTop: 118, lines: ["Google Business Profile", "Management & Optimisation"] },
  {
    number: 3,
    numberLeft: 78,
    numberTop: 228,
    textTop: 211,
    lines: ["Search Engine Optimisation/", "Generative Engine Optimization /", "Answer Engine Optimisation"],
  },
  { number: 4, numberLeft: 78, numberTop: 326, textTop: 326, lines: ["Lead Generation"] },
];

export function ServicesSection() {
  return (
    <section id="mobile-services" className="h-[442px]">
      <h2 className="translate-x-px text-center text-[25px] leading-[40px] text-[#5a5a5a]">Our Services</h2>

      {/* Four stacked bands; each sits 1px in from the left so a sliver of the base colour shows. */}
      <div className="relative mt-[12px] h-[390px] overflow-hidden bg-[#6b85e4]">
        <div className="absolute left-px top-0 h-[289px] w-full bg-[#738eed]" />
        <div className="absolute left-px top-0 h-[190px] w-full bg-[#7e9aff]" />
        <div className="absolute left-px top-0 h-[97px] w-full bg-[#7d95ec]" />

        <ol className="text-white">
          {SERVICES.map((service) => (
            <li key={service.number}>
              <span
                className="absolute text-[35px] font-bold leading-[20px]"
                style={{ left: service.numberLeft, top: service.numberTop }}
              >
                {service.number}
              </span>
              <p
                className="absolute left-[123px] whitespace-pre text-[15px] leading-[20px]"
                style={{ top: service.textTop }}
              >
                {service.lines.join("\n")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
