import Image from "next/image";

export function RecentDeliveriesSection() {
  return (
    <section className="h-[648px] pt-[37px]">
      <h2 className="ml-[54px] w-[285px] text-[33px] leading-[40px] text-steel">Our Recent Deliveries</h2>

      <div className="relative ml-[calc(50%-169px)] mt-[19px] h-[264px] w-[341px] overflow-hidden rounded-[21px]">
        <Image
          src="/images/recent-delivery.png"
          alt="Doctor profile website delivered by Grow Medico"
          fill
          sizes="341px"
          className="object-cover"
        />
        <Image
          src="/images/play-circle.svg"
          alt=""
          width={84.5892}
          height={92.6271}
          className="absolute left-[130.64px] top-[84.46px]"
        />
        <Image
          src="/images/play-triangle.svg"
          alt=""
          width={33.5649}
          height={38.5932}
          className="absolute left-[161.01px] top-[103.48px]"
        />
      </div>

      <p className="ml-[68px] mt-[50px] w-[270px] text-[18px] italic leading-[normal] text-[#aaa2a2]">
        We Design the Website each section very carefully focussing on your patient user experience and easy checkout
        with minimal clicks with hastle free fast dynamic website and we manage your website aslo.
      </p>
    </section>
  );
}
