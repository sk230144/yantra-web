import { WideAbout } from "./WideAbout";
import { WideClients } from "./WideClients";
import { WideDelivery } from "./WideDelivery";
import { WideFeatured } from "./WideFeatured";
import { WideFooter } from "./WideFooter";
import { WideGrowth } from "./WideGrowth";
import { WideHeader } from "./WideHeader";
import { WideHero } from "./WideHero";
import { WideHowSeo } from "./WideHowSeo";
import { WidePartners } from "./WidePartners";
import { WideRecognition } from "./WideRecognition";
import { WideSeoResults } from "./WideSeoResults";
import { WideServices } from "./WideServices";
import { WideTeam } from "./WideTeam";
import { WideWorkflow } from "./WideWorkflow";

/** Tablet and desktop layout (768px and up); the phone layout follows the Figma frame separately. */
export function WideHome() {
  return (
    <div className="bg-white text-[#151515]">
      <WideHeader />
      <main id="top">
        <WideHero />
        <WideClients />
        <WideServices />
        <WideFeatured />
        <WideWorkflow />
        <WideSeoResults />
        <WideHowSeo />
        <WideGrowth />
        <WidePartners />
        <WideDelivery />
        <WideAbout />
        <WideRecognition />
        <WideTeam />
      </main>
      <WideFooter />
    </div>
  );
}
