import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  return (
    <section className="relative h-[430px] font-display">
      <div className="absolute left-[calc(50%-214px)] top-0 h-[235px] w-[418px]">
        <Image src="/images/team-yantra.png" alt="Team Yantra Media" fill sizes="418px" className="object-cover" />
      </div>
      <div className="absolute left-[calc(50%-201px)] top-0 h-[235px] w-[402px] bg-[radial-gradient(closest-side,rgba(255,255,255,0)_0%,rgba(185,185,185,0.5)_50%,rgba(150,150,150,0.75)_75%,rgb(115,115,115)_100%)] opacity-50 mix-blend-multiply" />
      <p className="absolute left-[calc(50%+111px)] top-[214px] whitespace-nowrap text-[9px] font-bold leading-[normal] text-white">
        Team Yantra Media
      </p>

      <div className="absolute left-[calc(50%-149px)] top-[249px] h-[97px] w-[283px]">
        <Image
          src="/images/ym-logo-color.gif"
          alt=""
          width={97}
          height={97}
          unoptimized
          className="absolute left-0 top-0 h-[97px] w-[97px] object-cover"
        />
        <Image
          src="/images/yantramedia-wordmark.svg"
          alt="Yantramedia"
          width={173.842}
          height={26.1685}
          className="absolute left-[109px] top-[17px]"
        />
        <p className="absolute left-[114px] top-[43px] whitespace-nowrap text-[28px] leading-[normal] text-[#898989]">
          Agency
        </p>
      </div>

      <Link
        href="#contact"
        className="absolute left-[13px] right-[15px] top-[360px] flex h-[54px] items-center justify-center rounded-[13px] bg-black text-[13px] font-semibold leading-[normal] text-white"
      >
        Get a Call Back from us!
      </Link>
    </section>
  );
}
