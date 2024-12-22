import HeroSectionMain from "../ui/HeroSectionMain";
import FuturesSectionMain from "../ui/FuturesSectionMain";
import CasherSystemSectionMain from "../ui/CasherSystemSectionMain";
import SubscriptionsSectionMain from "../ui/SubscriptionsSectionMain";
import FAQSectionMain from "../ui/FAQSectionMain";
import CallActionSectionMain from "../ui/CallActionSectionMain";
import OurPartnersSection from "../ui/OurPartnersSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSectionMain />
      <OurPartnersSection />
      <FuturesSectionMain />
      <CasherSystemSectionMain />
      <SubscriptionsSectionMain/>
      <FAQSectionMain />
      <CallActionSectionMain />
    </div>
  );
}
