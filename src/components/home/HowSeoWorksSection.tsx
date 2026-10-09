type SeoStep = {
  number: number;
  numberLeft: number;
  numberTop: number;
  textLeft: number;
  textTop: number;
  textWidth: number;
  text: string;
};

// Offsets are relative to the section's inner (border-excluded) top edge.
const SEO_STEPS: SeoStep[] = [
  {
    number: 1,
    numberLeft: 37,
    numberTop: 165.59,
    textLeft: 84,
    textTop: 165,
    textWidth: 268,
    text: "Customising your website to a User Friendy Experenceand  and a smooth checkout",
  },
  {
    number: 2,
    numberLeft: 37,
    numberTop: 270.54,
    textLeft: 84,
    textTop: 280.38,
    textWidth: 231,
    text: "Smooth Checkout and Payment Integration",
  },
  {
    number: 3,
    numberLeft: 31,
    numberTop: 373.04,
    textLeft: 84,
    textTop: 373,
    textWidth: 242,
    text: "Proper Analysis of your Competitors, Keyword \nIntent and Research",
  },
  {
    number: 4,
    numberLeft: 31,
    numberTop: 495.87,
    textLeft: 84,
    textTop: 496,
    textWidth: 242,
    text: "Ranking your Niche Keywords on google for more organic reach and sale conversion",
  },
  {
    number: 5,
    numberLeft: 37,
    numberTop: 620.88,
    textLeft: 88,
    textTop: 622.33,
    textWidth: 289,
    text: "Ranking your Niche Keywords on google for\nmore organic reach and sale conversion",
  },
];

export function HowSeoWorksSection() {
  return (
    <section className="relative h-[795px] border-y border-black bg-periwinkle text-white">
      <h2 className="absolute left-[51px] top-[39px] text-[30px] font-bold leading-[35px]">How SEO Works</h2>
      <p className="absolute left-[51px] top-[119px] text-[20px] leading-[normal]">How we do it?</p>

      <ol>
        {SEO_STEPS.map((step) => (
          <li key={step.number}>
            <span
              className="absolute h-[45px] text-[50px] font-bold leading-[60px]"
              style={{ left: step.numberLeft, top: step.numberTop }}
            >
              {step.number}
            </span>
            <p
              className="absolute whitespace-pre-wrap text-[20px] leading-[normal]"
              style={{ left: step.textLeft, top: step.textTop, width: step.textWidth }}
            >
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
