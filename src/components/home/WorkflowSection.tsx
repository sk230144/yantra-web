type Step = {
  number: number;
  numberLeft: number;
  textTop: number;
  /** Explicit line breaks from Figma; long lines still wrap at the 235px text width. */
  lines: string[];
};

const STEPS: Step[] = [
  { number: 1, numberLeft: 60, textTop: 50, lines: ["Client Briefing &", "Requirement Mapping"] },
  { number: 2, numberLeft: 51, textTop: 53, lines: ["Research &", "Planning"] },
  { number: 3, numberLeft: 51, textTop: 52, lines: ["Wireframing &", "Content Structuring"] },
  { number: 4, numberLeft: 51, textTop: 52, lines: ["User Experience &", "FrontEnd Design"] },
  { number: 5, numberLeft: 52, textTop: 47, lines: ["Development & Integration"] },
  { number: 6, numberLeft: 50, textTop: 48, lines: ["CRM, Lead and Website", "Management & Mantainance"] },
];

export function WorkflowSection() {
  return (
    <section id="mobile-process" className="h-[901px] pt-[41px]">
      <h2 className="ml-[51px] whitespace-nowrap text-[30px] leading-[normal]">Our Proven Workflow</h2>

      <ol className="mt-[28px]">
        {STEPS.map((step) => (
          <li key={step.number} className="relative h-[129px]">
            <span
              className="absolute top-0 h-[125px] bg-linear-to-b from-[#c2ff1c] to-[#2c5512] bg-clip-text font-arial-black text-[96px] leading-[normal] text-transparent"
              style={{ left: step.numberLeft }}
            >
              {step.number}
            </span>
            <p className="absolute left-[141px] w-[235px] text-[20px] leading-[normal]" style={{ top: step.textTop }}>
              {step.lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>

      <div className="ml-[6px] mt-[23px] h-px w-[381px] bg-divider" />
    </section>
  );
}
