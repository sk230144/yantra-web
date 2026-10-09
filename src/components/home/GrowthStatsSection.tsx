import { SoftButton } from "@/components/ui/SoftButton";

export function GrowthStatsSection() {
  return (
    <section className="h-[476px] bg-black pt-[78px]">
      <p className="ml-[48px] w-[340px] text-[33px] leading-[40px] text-white">
        Since 2020, we’ve helped<strong> 45+ hospitals</strong> &amp; clinics across India achieve up to{" "}
        <strong>2X</strong> <strong>growth.</strong>
      </p>

      <SoftButton href="#contact" className="ml-[47px] mt-[62px] h-[57px] w-[215px] pl-[45px] pt-[20px]">
        Get a Free Demo
      </SoftButton>
    </section>
  );
}
