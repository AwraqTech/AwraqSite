import Image from "next/image";
import HeroSectionMain from "./ui/HeroSectionMain";
import FuturesSectionMain from "./ui/FuturesSectionMain";
import CasherSystemSectionMain from "./ui/CasherSystemSectionMain";
import SubscriptionsSectionMain from "./ui/SubscriptionsSectionMain";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSectionMain />
      <FuturesSectionMain />
      <CasherSystemSectionMain />
      <SubscriptionsSectionMain />
    </div>
  );
}
