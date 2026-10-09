import Image from "next/image";

type ClientLogo = { name: string; slug: string; width: number; height: number };

// Logos are pre-trimmed to their visible content (public/images/clients); width/height are the file's pixels.
const ROW_ONE: ClientLogo[] = [
  { name: "CSB Bank", slug: "csb-bank", width: 640, height: 162 },
  { name: "Mistral of Milan", slug: "mistral-of-milan", width: 246, height: 63 },
  { name: "Fortis", slug: "fortis", width: 487, height: 200 },
  { name: "Danish Academy", slug: "danish-academy", width: 289, height: 65 },
  { name: "The Taplow Group", slug: "taplow-group", width: 452, height: 200 },
  { name: "Mediland Hospital and Research Centre", slug: "mediland", width: 640, height: 174 },
  { name: "Delhivery", slug: "delhivery", width: 640, height: 108 },
  { name: "Ink & Inspiration", slug: "ink-and-inspiration", width: 345, height: 200 },
  { name: "Jagannath University", slug: "jagannath-university", width: 600, height: 200 },
  { name: "Government of Assam", slug: "govt-of-assam", width: 251, height: 80 },
  { name: "Lifesave Hospital", slug: "lifesave-hospital", width: 640, height: 133 },
  { name: "Sheeya", slug: "sheeya", width: 190, height: 44 },
];

const ROW_TWO: ClientLogo[] = [
  { name: "inDrive", slug: "indrive", width: 640, height: 181 },
  { name: "Care and Cure Multi-speciality Hospital", slug: "care-and-cure-hospital", width: 640, height: 167 },
  { name: "Maya Jewellers", slug: "maya-jewellers", width: 190, height: 53 },
  { name: "AVI Enterprises", slug: "avi-enterprises", width: 640, height: 125 },
  { name: "Jeevan Jyoti Hospital & Research Center", slug: "jeevan-jyoti-hospital", width: 337, height: 81 },
  { name: "Hotel Rudraksh", slug: "hotel-rudraksh", width: 640, height: 164 },
  { name: "Dental Remedy", slug: "dental-remedy", width: 615, height: 200 },
  { name: "Siva Sundari Nari Sikshashram", slug: "siva-sundari-nari-sikshashram", width: 258, height: 61 },
  { name: "ALK Pure 8+", slug: "alk-pure", width: 640, height: 164 },
  { name: "Ayu Bandhan", slug: "ayu-bandhan", width: 449, height: 200 },
  { name: "Pratidhi Welfare Foundation", slug: "pratidhi-welfare-foundation", width: 237, height: 72 },
];

const LOGO_AREA = 9000; // Every logo gets roughly the same visual weight (≈ inDrive's 198×56 in Figma).
const LOGO_GAP = 40;
const SCROLL_SPEED = 40; // px per second

function displaySize({ width, height }: ClientLogo) {
  const aspect = width / height;
  let h = Math.min(64, Math.sqrt(LOGO_AREA / aspect));
  let w = h * aspect;
  if (w > 200) {
    w = 200;
    h = w / aspect;
  }
  return { width: Math.round(w), height: Math.round(h) };
}

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

      <MarqueeRow logos={ROW_ONE} className="top-[80px]" />
      <MarqueeRow logos={ROW_TWO} reverse className="top-[190px]" />
    </section>
  );
}
