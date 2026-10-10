import Image from "next/image";
import { CLIENT_LOGOS_ROW_ONE, CLIENT_LOGOS_ROW_TWO, logoDisplaySize, type ClientLogo } from "@/content/home";

const LOGO_AREA = 9000; // Every logo gets roughly the same visual weight (≈ inDrive's 198×56 in Figma).
const LOGO_GAP = 40;
const SCROLL_SPEED = 40; // px per second

const displaySize = (logo: ClientLogo) => logoDisplaySize(logo, LOGO_AREA, 64, 200);

function MarqueeRow({ logos, reverse, className }: { logos: ClientLogo[]; reverse?: boolean; className: string }) {
  const rowWidth = logos.reduce((sum, logo) => sum + displaySize(logo).width + LOGO_GAP, 0);
  return (
    <div className={`absolute inset-x-0 h-[70px] overflow-hidden motion-reduce:overflow-x-auto motion-reduce:scrollbar-none ${className}`}>
      <ul
        className={`flex h-full w-max animate-marquee items-center hover:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: `${Math.round(rowWidth / SCROLL_SPEED)}s` }}
      >
        {[0, 1].map((copy) =>
          logos.map((logo) => {
            const size = displaySize(logo);
            return (
              <li key={`${copy}-${logo.slug}`} aria-hidden={copy === 1} className="shrink-0" style={{ paddingRight: LOGO_GAP }}>
                <Image
                  src={`/images/clients/${logo.slug}.png`}
                  alt={copy === 0 ? logo.name : ""}
                  width={size.width}
                  height={size.height}
                  className="object-contain"
                />
              </li>
            );
          }),
        )}
      </ul>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="relative h-[357px] overflow-hidden">
      <h2 className="ml-[calc(50%-100px)] w-[210px] whitespace-nowrap text-[25px] leading-[normal] text-mist">
        Few of Our Clients
      </h2>

      <MarqueeRow logos={CLIENT_LOGOS_ROW_ONE} className="top-[80px]" />
      <MarqueeRow logos={CLIENT_LOGOS_ROW_TWO} reverse className="top-[190px]" />
    </section>
  );
}
