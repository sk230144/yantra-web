import Image from "next/image";
import { CLIENT_LOGOS_ROW_ONE, CLIENT_LOGOS_ROW_TWO, logoDisplaySize, type ClientLogo } from "@/content/home";
import { Reveal } from "./motion";

const GAP = 72;
const SPEED = 45; // px per second

function LogoRow({ logos, reverse }: { logos: ClientLogo[]; reverse?: boolean }) {
  const sizes = logos.map((logo) => logoDisplaySize(logo, 13000, 78, 230));
  const rowWidth = sizes.reduce((sum, size) => sum + size.width + GAP, 0);
  return (
    <div className="flex h-[96px] items-center overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] motion-reduce:overflow-x-auto motion-reduce:scrollbar-none">
      <ul
        className={`flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: `${Math.round(rowWidth / SPEED)}s` }}
      >
        {[0, 1].map((copy) =>
          logos.map((logo, i) => (
            <li key={`${copy}-${logo.slug}`} aria-hidden={copy === 1} className="shrink-0" style={{ paddingRight: GAP }}>
              <Image
                src={`/images/clients/${logo.slug}.png`}
                alt={copy === 0 ? logo.name : ""}
                width={sizes[i].width}
                height={sizes[i].height}
                className="object-contain opacity-60 grayscale transition duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export function WideClients() {
  return (
    <section aria-labelledby="clients-title" className="border-y border-black/5 bg-white py-16">
      <Reveal className="mx-auto mb-10 flex max-w-[1440px] items-end justify-between gap-10 px-8 lg:px-12 xl:px-16">
        <h2 id="clients-title" className="text-[13px] font-bold uppercase tracking-[0.26em] text-black/40">
          Few of our clients
        </h2>
        <p className="text-[15px] text-black/50">
          <span className="font-bold text-navy">500+</span> happy clients across healthcare and beyond
        </p>
      </Reveal>
      <div className="space-y-6">
        <LogoRow logos={CLIENT_LOGOS_ROW_ONE} />
        <LogoRow logos={CLIENT_LOGOS_ROW_TWO} reverse />
      </div>
    </section>
  );
}
